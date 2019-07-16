import { css, customElement, html, LitElement, property, unsafeCSS, queryAll, query } from 'lit-element';

const componentCSS = require('./top-navbar-overview.component.scss');

@customElement('top-navbar-overview')
class AppComponent extends LitElement {

  static styles = css`${unsafeCSS(componentCSS)}`;

  render() {
    return html`
  <div class="container shadow">
    <h2>bronco-top-navbar</h2>
    <div class="row">
      <div class="col">
        <div class="componentInfo">
          <span class="comment">&lt!-- Detailed Documentation on <a class="comment" target="_blank" href="https://github.com/marius2502/bronco-top-navbar"
              class="attributeName"><strong>Github</strong></a> --></span>
          <a style="float:right" target="_blank" href="https://codepen.io/marius2502/pen/gNyWWV">
            <i class="material-icons" target="_blank" href="https://codepen.io/marius2502/pen/gNyWWV">launch</i>

          </a>
          <br>
          <br>
          <span class="tag">&ltbronco-top-navbar
            <span class="attribute">hideOnTop=<span class="attributeName">"false"<span class="tag">></span>
                ></span>
              <span class="tag">&lt/bronco-top-navbar></span>
              <br>
              <br>
              <!-- Styling -->
              <span class="tag">&ltstyle></span>
              <br>
              <span style="color:white">
                <br>
                <span class="tag">bronco-top-navbar<span style="color:white"> {</span></span>
                <br>
                <span class="attribute">--position: <span class="attributeName">relative;</span></span>
                <br>
                <span style="color:white">}</span>
                <br>
                <br>
                <span class="tag">&lt/style></span>
        </div>
      </div>
      <div class="col">
        <div style="width: 100%; height: 300px">
          <bronco-top-navbar></bronco-top-navbar>
        </div>
      </div>
    </div>
`;
  }

}
