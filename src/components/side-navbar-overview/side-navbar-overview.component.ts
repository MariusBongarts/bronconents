import { css, customElement, html, LitElement, property, unsafeCSS, queryAll, query } from 'lit-element';

const componentCSS = require('./side-navbar-overview.component.scss');

@customElement('side-navbar-overview')
class AppComponent extends LitElement {

  static styles = css`${unsafeCSS(componentCSS)}`;

  render() {
    return html`
  <div class="container shadow">
    <h2>bronco-side-navbar <a style="float:right" target="_blank" href="https://codepen.io/marius2502/pen/pXYRXX">TODO
        <i class="material-icons" target="_blank" href="https://codepen.io/marius2502/pen/pXYRXX">launch</i>
      </a></h2>
    <div class="row">
      <div class="col justify-content-center align-center">
        <div class="componentInfo">
          <span class="comment">&lt!-- Detailed Documentation on <a class="comment" target="_blank" href="https://github.com/marius2502/bronco-side-navbar"
              class="attributeName"><strong>Github</strong></a> --></span>
          <br>
          <br>
          <span class="tag">&ltbronco-side-navbar></span>
          <span class="tag">&lt/bronco-side-navbar></span>
          <br>
          <br>
        </div>
      </div>
      <div class="col justify-content-center align-center my-5">
        <bronco-side-navbar style="--sidebar-min-height: 100%"></bronco-side-navbar>
      </div>
    </div>
`;
  }

}
