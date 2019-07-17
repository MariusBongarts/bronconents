import { css, customElement, html, LitElement, property, unsafeCSS, queryAll, query } from 'lit-element';

const componentCSS = require('./app.component.scss');

const logoImg = require('./../assets/logo2.png');
const logoSvg = require('./../assets/logo.svg');

/**
 * @author Marius Bongarts
 * Root web component
 */
@customElement('app-root')
export class AppRoot extends LitElement {

  static styles = css`${unsafeCSS(componentCSS)}`;

  @property()
  navItems = ['bronco-button', 'bronco-corner-navbar', 'bronco-left-navbar', 'bronco-searchbar', 'bronco-side-navbar', 'bronco-top-navbar'];

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
        <bronco-top-navbar hideOnNotTop="true">
          <img src="${logoSvg}" slot="left">
          <a slot="right" href="https://github.com/marius2502/bronconents" target="_blank"><svg class="octicon octicon-mark-github v-align-middle"
              height="100%" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true">
              <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
            </svg></a>
        </bronco-top-navbar>
      </div>

      <div slot="nav">
        <bronco-side-navbar .hideOnMobile=${false} .navItems=${this.navItems} selectedItem=${this.selectedItem} @selected=${(e:
      CustomEvent) =>
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

        <section id='bronco-searchbar'>
          <searchbar-overview></searchbar-overview>
        </section>

        <section id='bronco-side-navbar'>
          <side-navbar-overview></side-navbar-overview>
        </section>

        <section id='bronco-top-navbar'>
          <top-navbar-overview></top-navbar-overview>
        </section>
      </div>
    </bronco-template>

`;
  }

}
