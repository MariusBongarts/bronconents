import { css, customElement, html, LitElement, property, unsafeCSS, query } from 'lit-element';

const componentCSS = require('./app.component.scss');

/**
 * @author Marius Bongarts
 * Root web component
 */
@customElement('app-root')
export class AppRoot extends LitElement {

  static styles = css`${unsafeCSS(componentCSS)}`;

  /**
   * Title of this component
   * @attr
   * @type {string}
   * @memberof AppComponent
   */
  @property()
  title: string = 'LitElement Starter';

  render() {
    return html`
          <h1>${this.title}</h1>

          <bronco-button>Test</bronco-button>
`;
  }

}
