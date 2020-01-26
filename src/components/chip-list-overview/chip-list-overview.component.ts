import { css, customElement, html, LitElement, property, unsafeCSS, queryAll, query } from 'lit-element';

const componentCSS = require('./chip-list-overview.component.scss');

@customElement('chip-list-overview')
class AppComponent extends LitElement {

  static styles = css`${unsafeCSS(componentCSS)}`;

  render() {
    return html`
  <div class="container shadow">
    <h2>bronco-chip-list <a style="float:right" target="_blank" title="Live demo" href="https://codepen.io/marius2502/pen/MMzboL">
        <i class="material-icons" target="_blank" href="https://codepen.io/marius2502/pen/MMzboL">launch</i>
      </a></h2>
    <div class="row my-5">
      <div class="col justify-content-center align-center">
        <div class="componentInfo">
          <span class="comment">&lt!-- Detailed Documentation on <a class="comment" target="_blank" href="https://github.com/marius2502/bronco-chip-list"
              class="attributeName"><strong>Github</strong></a> --></span>
          <br>
          <br>
          <span class="tag">&ltbronco-chip-list></span>
          <span class="tag">&lt/bronco-chip-list></span>
          <br>
        </div>
      </div>
      <div class="col justify-content-center align-center">
        <bronco-chip-list @tagsChanged=${(e: CustomEvent) => console.log(e.detail)}></bronco-chip-list>
      </div>
    </div>

  </div>
`;
  }

}
