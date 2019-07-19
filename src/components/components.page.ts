import { router } from './../services/router';
import { css, customElement, html, LitElement, property, unsafeCSS, queryAll, query } from 'lit-element';

const componentCSS = require('./components.page.scss');

const logoSvg = require('./../assets/logo.svg');

/**
 * @author Marius Bongarts
 * Root web component
 */
@customElement('components-page')
export class ComponentsPage extends LitElement {

  static styles = css`${unsafeCSS(componentCSS)}`;

  @property()
  components = ['bronco-button', 'bronco-corner-navbar', 'bronco-left-navbar', 'bronco-searchbar', 'bronco-side-navbar', 'bronco-template', 'bronco-top-navbar'];

  @property()
  navItems!: string[];

  @property()
  selectedItem: string | any;

  @property()
  loaded = false;

  @queryAll('section')
  sectionElements!: HTMLElement[];

  scrollListener: any;

  firstUpdated() {
    let param = router.getParams();

    param && param.key == 'component' ? this.selectedItem = param.value : '';

    router.subscribe(route => {
      let param = router.getParams();
      console.log(param);
      param && param.key == 'component' ? this.selectedItem = param.value : this.selectedItem = this.navItems[0];
      route === 'components'.toLowerCase() ? this.scrollToSection(this.selectedItem) : '';
    });

    document.onscroll = () => {
      this.sectionElements.forEach(e => {
        (e.offsetTop - 200) < document.documentElement.scrollTop ? this.selectedItem = e.getAttribute('id') : '';
      });
    };

    if (router.getPath() === 'components') {
      setTimeout(() => {
        router.getPath() === 'components' ? this.scrollToSection(this.selectedItem) : '';
      }, 50);
    }
  }

  // Remove listener when element is removed from dom
  disconnectedCallback() {
    document.onscroll = () => '';
  }

  scrollToSection(item: string) {
    try {
    let sectionElement!: HTMLElement;
    this.sectionElements.forEach(e => {
      if (e.getAttribute('id') === item) sectionElement = e;
    });
    window.scrollTo({
      top: sectionElement.offsetTop,
      left: 0,
      behavior: 'smooth'
    });
  } catch (error) {}
  }

  render() {
    return html`
        <bronco-template .hideNavForever=${false}>
          <div slot="header">
            <bronco-top-navbar .navItems=${this.navItems} .hideOnNotTop=${false} @selected=${(e: CustomEvent) =>
        this.navItems.find(item => item === e.detail) ? router.navigate(e.detail.toLowerCase()) : ''}>

              <img src="${logoSvg}" slot="left" tabindex="0" @click=${()=> router.navigate('home')}>

              <bronco-searchbar .searchArray=${this.components} @selected=${(e: CustomEvent) =>
        router.navigate('components?component=' + e.detail)} slot="center"></bronco-searchbar>


              <a slot="right" href="https://github.com/marius2502/bronconents" target="_blank"><svg class="octicon octicon-mark-github v-align-middle"
                  height="100%" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true">
                  <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                </svg></a>

            </bronco-top-navbar>
          </div>

          <div slot="nav">
            <bronco-side-navbar selectedItem=${this.selectedItem} .hideOnMobile=${false} .navItems=${this.components} @selected=${(e:
                    CustomEvent)=>
                router.navigate('components?component=' + e.detail)}}>
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

            <section id='bronco-template'>
              <template-overview></template-overview>
            </section>

            <section id='bronco-top-navbar'>
              <top-navbar-overview></top-navbar-overview>
            </section>
          </div>
        </bronco-template>

`;
  }

}
