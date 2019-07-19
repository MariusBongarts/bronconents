import { css, customElement, html, LitElement, property, unsafeCSS, queryAll, query } from 'lit-element';
import { router } from './../services/router';

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
  path: string = router.getPath();

  @property()
  components = ['bronco-button', 'bronco-corner-navbar', 'bronco-left-navbar', 'bronco-searchbar', 'bronco-side-navbar', 'bronco-template', 'bronco-top-navbar'];

  @property()
  navItems = ['Get started', 'Components'];

  firstUpdated() {
    router.subscribe((path: string) => {
      this.path = path;
      this.requestUpdate();
    });
  }

  renderRouterOutlet() {
    const path = router.getPath();
    switch (path.toLowerCase()) {
      case 'home':
        return html`<landing-page .navItems=${this.navItems} .searchArray=${this.components}></landing-page>`;
      case 'components':
        return html`<components-page .navItems=${this.navItems} ></components-page>`;
      default:
        return html`<landing-page .navItems=${this.navItems} .searchArray=${this.components}></landing-page>`;
    }
  }

  render() {
    return html`
        ${this.renderRouterOutlet()}
`;
  }

}
