import { css, customElement, html, LitElement, property, unsafeCSS, queryAll, query } from 'lit-element';
import { router } from '../services/router';

const componentCSS = require('./landing.page.scss');
const logoSvg = require('./../assets/logo.svg');
const imgInstallation = require('./../assets/installation.png');

/**
 * @author Marius Bongarts
 * Root web component
 */
@customElement('landing-page')
export class LandingPage extends LitElement {

  static styles = css`${unsafeCSS(componentCSS)}`;

  render() {
    return html`
    <img class="landingImg" src="https://cdn.pixabay.com/photo/2015/01/08/18/26/write-593333_960_720.jpg">

    <div class="container">

      <div class="center">

        <div class="header">
          <h1><img src="${logoSvg}" slot="left" tabindex="0" @click=${()=> router.navigate('home')}></h1>
        </div>

        <bronco-button outlineEffect>Get started</bronco-button>
      </div>
    </div>

    <div class="container">
      <img class="getStarted" style="border-radius: 20px" src="${imgInstallation}">
    </div>
            `;
  }

}
