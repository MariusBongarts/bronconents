import { css, customElement, html, LitElement, property, unsafeCSS, queryAll, query } from 'lit-element';

const componentCSS = require('./app.component.scss');

const logoImg = require('./../assets/logo2.png');

/**
 * @author Marius Bongarts
 * Root web component
 */
@customElement('app-root')
export class AppRoot extends LitElement {

  static styles = css`${unsafeCSS(componentCSS)}`;

  @property()
  navItems = ['bronco-button', 'bronco-corner-navbar', 'bronco-left-navbar', 'bronco-top-navbar'];

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
        //     if (document.documentElement.offsetHeight - window.innerHeight === 0) {
        //       this.selectedItem = this.navItems[this.navItems.length - 1];
        //     }
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
    <bronco-template>
      <div slot="header">
        <bronco-corner-navbar hideOnScrolling="true" hideOnTop="true" @selected=${(e: CustomEvent) =>
        console.log(e.detail)}></bronco-corner-navbar>

        <bronco-top-navbar hideOnNotTop="true">
          <img style="width:90%; height: 2em;" src="${logoImg}" slot="leftHeader">
        </bronco-top-navbar>
      </div>

      <div slot="nav">
        <bronco-side-navbar .navItems=${this.navItems} selectedItem=${this.selectedItem} @selected=${(e: CustomEvent) =>
              this.scrollToSection(e.detail)}>
        </bronco-side-navbar>
      </div>

      <div slot="main">
        <section id='bronco-button'>
          <button-overview></button-overview>
        </section>

        <section id='bronco-corner-navbar'>
          <corner-navbar-overview></corner-navbar-overview>
        </section>

        <section id='bronco-left-navbar'>
          <left-navbar-overview></left-navbar-overview>
        </section>

        <section id='bronco-top-navbar'>
          <top-navbar-overview></top-navbar-overview>
        </section>
      </div>
    </bronco-template>

`;
  }

}
