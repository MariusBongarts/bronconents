import { css, customElement, html, LitElement, property, unsafeCSS, queryAll, query } from 'lit-element';
import { router } from '../services/router';

const componentCSS = require('./landing.page.scss');
const logoSvg = require('./../assets/logo.svg');
const imgInstallation = require('./../assets/installation.png');
const imgElements = require('./../assets/elements.png');

/**
 * @author Marius Bongarts
 * Root web component
 */
@customElement('landing-page')
export class LandingPage extends LitElement {

  static styles = css`${unsafeCSS(componentCSS)}`;

  @property()
  containerIndex: number = 0;

  @property()
  navItems!: string[];

  @property()
  searchArray!: string[];

  @property()
  scrolledTop: boolean = true;

  @queryAll('.landingContainer')
  landingContainer!: HTMLElement[];

  lastScroll = 0;

  firstUpdated() {
    document.documentElement.scrollTop = 0;
    this.containerIndex = 0;
    window.addEventListener('scroll', this.hideOnTop);
    window.addEventListener('scroll', this.detectScrollDirection, { once: true });
  }

  detectScrollDirection = () => {
    console.log("OldScroll: " + this.lastScroll);
    window.removeEventListener('scroll', this.detectScrollDirection);
    this.scrollToContainer();
  };

  disconnectedCallback() {
    window.removeEventListener('scroll', this.hideOnTop);
    window.removeEventListener('scroll', this.detectScrollDirection);
  }

  hideOnTop = () => {
    document.documentElement.scrollTop === 0 ? this.scrolledTop = true : this.scrolledTop = false;
    this.scrolledTop ? this.containerIndex = 0 : '';
  }

  scrollToContainer(newY?: number) {
    newY ? window.removeEventListener('scroll', this.detectScrollDirection) : '';
    const y = newY || document.documentElement.scrollTop;
    if (this.lastScroll < y) {
      this.containerIndex === this.landingContainer.length - 1 ?
        this.containerIndex = this.landingContainer.length - 1 :
        this.containerIndex++;
    }
    if (this.lastScroll > y) {
      this.containerIndex === 0 ? this.containerIndex = 0 : this.containerIndex--;
    }
    const container = this.landingContainer[this.containerIndex];
    window.scrollTo({
      top: container.offsetTop,
      left: 0,
      behavior: 'smooth'
    });

    setTimeout(() => {
      this.lastScroll = document.documentElement.scrollTop;
      window.addEventListener('scroll', this.detectScrollDirection, { once: true });
      console.log("NewScroll: " + this.lastScroll);
    }, 800);

  }

  render() {
    return html`
      <bronco-top-navbar class="${this.scrolledTop ? 'onTop' : ''}" .navItems=${this.navItems} .hideOnNotTop=${false}
        @selected=${(e: CustomEvent) =>
        this.navItems.find(item => item === e.detail) ? router.navigate(e.detail.toLowerCase()) : ''}>

        <img src="${logoSvg}" slot="left" tabindex="0" @click=${()=> router.navigate('home')}>

        <bronco-searchbar .searchArray=${this.searchArray} @selected=${(e: CustomEvent) =>
        router.navigate('components?component=' + e.detail)} slot="center"></bronco-searchbar>


        <a slot="right" href="https://github.com/marius2502/bronconents" target="_blank"><svg class="octicon octicon-mark-github v-align-middle"
            height="100%" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true">
            <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
          </svg></a>

      </bronco-top-navbar>


      <div class="landingImg"></div>
      <div class="landingContainer">

        <div class="center">

          <div class="header">
            <img class="logo" src="${logoSvg}" slot="left" tabindex="0" @click=${()=> router.navigate('home')}>
          </div>

          <bronco-button outlineEffect @click=${()=> router.navigate('GetStarted')}>Get started</bronco-button>
          <hr class="divider">
          <bronco-button outline outlineEffect @click=${()=> router.navigate('components')}>See Elements</bronco-button>
          <div class="drag down">
            <bronco-icon @click=${()=> this.scrollToContainer(this.lastScroll + 1)}
              class="material-icons" iconName='keyboard_arrow_down'></bronco-icon>
          </div>
        </div>
      </div>

      <div class="landingContainer">
        <div class="drag up">
          <bronco-icon class="material-icons" iconName='keyboard_arrow_up' @click=${()=>
            this.scrollToContainer(this.lastScroll - 1)}></bronco-icon>
        </div>
        <div class="center">
          <div>
            <img class="imgInstallation" src="${imgInstallation}" slot="left" tabindex="0" @click=${()=>
        router.navigate('home')}>
          </div>
        </div>
        <div class="drag down">
          <bronco-icon @click=${()=> this.scrollToContainer(this.lastScroll + 1)}
            class="material-icons" iconName='keyboard_arrow_down'></bronco-icon>
        </div>
      </div>

      <div class="landingContainer">
        <div class="drag up">
          <bronco-icon @click=${()=> this.scrollToContainer(this.lastScroll - 1)}
            class="material-icons" iconName='keyboard_arrow_up'></bronco-icon>
        </div>
        <div class="center">
          <div>
            <img class="imgElements" src="${imgElements}" slot="left" tabindex="0" @click=${()=>
        router.navigate('home')}>
          </div>
        </div>
      </div>

            `;
  }

}
