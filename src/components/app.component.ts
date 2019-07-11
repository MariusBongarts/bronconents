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
  navItems = ['bronco-button', 'bronco-left-navbar'];

  @property()
  selectedItem: string | any;

  @queryAll('section')
  sectionElements!: HTMLElement[];

  firstUpdated() {
    this.selectedItem = this.navItems[0];
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
    window.scrollTo({
      top: sectionElement.offsetTop,
      left: 0,
      behavior: 'smooth'
    });
  }

  render() {
    return html`
    <div class="container-fluid w-100">
      <bronco-corner-navbar hideOnScrolling="true" @selected=${(e: CustomEvent) => console.log(e.detail)}></bronco-corner-navbar>
      <bronco-top-navbar></bronco-top-navbar>
      <div class="row">
        <div class="d-none d-lg-block col-2 p-0 m-0">
          <bronco-left-navbar .navItems=${this.navItems} selectedItem=${this.selectedItem} @selected=${(e: CustomEvent) =>
              this.scrollToSection(e.detail)}
            >
          </bronco-left-navbar>
        </div>
        <div class="col-12 col-lg-10 py-5 p-lg-5">


          <section id='bronco-button'>
            <button-overview></button-overview>
          </section>

          <section id='bronco-left-navbar'>
            <left-navbar-overview></left-navbar-overview>
          </section>


          <!-- <section id='marius-navbar'>
            <navbar-overview></navbar-overview>
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
