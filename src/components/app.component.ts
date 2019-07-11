import { css, customElement, html, LitElement, property, unsafeCSS, queryAll, query } from 'lit-element';

const componentCSS = require('./app.component.scss');

/**
 * @author Marius Bongarts
 * Root web component
 */
@customElement('app-root')
export class AppRoot extends LitElement {

  static styles = css`${unsafeCSS(componentCSS)}`;

  @property()
  navItems = ['marius-button', 'marius-navbar', 'marius-left-navbar', 'marius-fifa-card'];

  @property()
  selectedItem: string | any;

  @queryAll('section')
  sectionElements!: HTMLElement[];

  firstUpdated() {
    window.addEventListener('scroll', () => {
      this.sectionElements.forEach(e => {
        (e.offsetTop - 200) < document.documentElement.scrollTop ? this.selectedItem = e.getAttribute('id') : '';

        // If scrolled to bottom
        if (document.documentElement.scrollTop === (document.documentElement.offsetHeight - window.innerHeight)) {
          this.selectedItem = this.navItems[this.navItems.length - 1];
        }
      });
    });
  }

  scrollToSection(item: string) {
    let sectionElement!: HTMLElement;
    this.sectionElements.forEach(e => {
      if (e.getAttribute('id') === item) sectionElement = e;
    });
    window.scrollTo(0, sectionElement.offsetTop);
  }

  render() {
    return html`
    <div class="container-fluid w-100">
      <marius-top-navbar></marius-top-navbar>
      <div class="row">
        <div class="d-none d-lg-block col-2 p-0 m-0">
          <marius-left-navbar .navItems=${this.navItems} selectedItem=${this.selectedItem} @clicked=${(e: CustomEvent) =>
              this.scrollToSection(e.detail)}
            >
          </marius-left-navbar>
        </div>
        <div class="col-12 col-lg-10 py-5 p-lg-5">


          <section id='marius-button'>
            <button-overview></button-overview>
          </section>


          <!-- <section id='marius-navbar'>
            <navbar-overview></navbar-overview>
          </section>

          <section id='marius-left-navbar'>
            <left-navbar-overview></left-navbar-overview>
          </section>

          <section id='marius-fifa-card'>
            <fifa-card-overview></fifa-card-overview>
          </section> -->

        </div>
      </div>


    </div>
`;
  }

}
