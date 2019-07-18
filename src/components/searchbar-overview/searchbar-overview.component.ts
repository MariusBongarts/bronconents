import { css, customElement, html, LitElement, property, unsafeCSS, queryAll, query } from 'lit-element';

const componentCSS = require('./searchbar-overview.component.scss');

@customElement('searchbar-overview')
class AppComponent extends LitElement {

  static styles = css`${unsafeCSS(componentCSS)}`;

  render() {
    return html`
  <div class="container shadow">
    <h2>bronco-searchbar <a style="float:right" target="_blank" title="Live demo" href="https://codepen.io/marius2502/pen/pXYRXX">
        <i class="material-icons" target="_blank" href="https://codepen.io/marius2502/pen/pXYRXX">launch</i>
      </a></h2>
    <div class="row my-5">
      <div class="col justify-content-center align-center">
        <div class="componentInfo">
          <span class="comment">&lt!-- Detailed Documentation on <a class="comment" target="_blank" href="https://github.com/marius2502/bronco-searchbar"
              class="attributeName"><strong>Github</strong></a> --></span>
          <br>
          <br>
          <span class="tag">&ltbronco-searchbar></span>
          <span class="tag">&lt/bronco-searchbar></span>
          <br>
          <br>
        </div>
      </div>
      <div class="col justify-content-center align-center">
        <bronco-searchbar .searchArray=${['Item1', 'Item2' , 'Item3' ]}></bronco-searchbar>
      </div>
    </div>
  </div>
`;
  }

}
