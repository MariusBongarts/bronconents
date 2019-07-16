import { css, customElement, html, LitElement, property, unsafeCSS, queryAll, query } from 'lit-element';


const componentCSS = require('./corner-navbar-overview.component.scss');

@customElement('corner-navbar-overview')
class AppComponent extends LitElement {

  static styles = css`${unsafeCSS(componentCSS)}`;

  render() {
    return html`
    <div class="container shadow">
      <h2>bronco-corner-navbar</h2>
      <div class="row">
        <div class="col">
          <div class="componentInfo">
            <span class="comment">&lt!-- Detailed Documentation on <a class="comment" target="_blank" href="https://github.com/marius2502/bronco-corner-navbar"
                class="attributeName"><strong>Github</strong></a> --></span>
            <a style="float:right" target="_blank" href="https://codepen.io/marius2502/pen/LKaMWL">
              <i class="material-icons" target="_blank" href="https://codepen.io/marius2502/pen/LKaMWL">launch</i>
            </a>
            <br>
            <br>
            <span class="tag">&ltbronco-corner-navbar></span>
            <span class="tag">&lt/bronco-corner-navbar></span>
            <br>
            <br>
            <!-- Styling -->
            <span class="tag">&ltstyle></span>
            <br>
            <span style="color:white">
              <br>
              <span class="tag">bronco-corner-navbar<span style="color:white"> {</span></span>
              <br>
              <span class="attribute">--position: <span class="attributeName">relative;</span></span>
              <br>
              <span style="color:white">}</span>
              <br>
              <br>
              <span class="tag">&lt/style></span>
          </div>
        </div>
        <div class="col justify-content-center align-center">
        <div style="width: 100%; height: 300px">
            <bronco-corner-navbar></bronco-corner-navbar>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <div class="componentInfo">
            <span class="comment">&lt!-- Detailed Documentation on <a class="comment" target="_blank" href="https://github.com/marius2502/bronco-corner-navbar"
                class="attributeName"><strong>Github</strong></a> --></span>
            <a style="float:right" target="_blank" href="https://codepen.io/marius2502/pen/LKaMWL">
              <i class="material-icons" target="_blank" href="https://codepen.io/marius2502/pen/LKaMWL">launch</i>
            </a>
            <br>
            <br>
            <span class="tag">&ltbronco-corner-navbar></span>
            <span class="tag">&lt/bronco-corner-navbar></span>
            <br>
            <br>
            <!-- Styling -->
            <span class="tag">&ltstyle></span>
            <br>
            <span style="color:white">
              <br>
              <span class="tag">bronco-corner-navbar<span style="color:white"> {</span></span>
              <br>
              <span class="attribute">--position: <span class="attributeName">relative;</span></span>
              <br>
              <span style="color:white">}</span>
              <br>
              <br>
              <span class="tag">&lt/style></span>
          </div>
        </div>
        <div class="col justify-content-center align-center">
          <div style="width: 100%; height: 300px">
            <bronco-corner-navbar></bronco-corner-navbar>
          </div>
        </div>
      </div>


    </div>
`;
  }

}
