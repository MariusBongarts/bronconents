import { css, customElement, html, LitElement, property, unsafeCSS, queryAll, query } from 'lit-element';


const componentCSS = require('./corner-navbar-overview.component.scss');

@customElement('corner-navbar-overview')
class AppComponent extends LitElement {

  static styles = css`${unsafeCSS(componentCSS)}`;

  render() {
    return html`
      <!-- bronco-corner-navbar -->
      <div class="row my-2 m-0 p-0 mt-5">
        <div class="col-12">
          <h5>bronco-corner-navbar</h5>
        </div>
        <!-- First -->
        <div class="col-12 col-lg-6 componentInfo">
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
        <div class="col-12 col-lg-6">
          <div class="row d-flex justify-content-center">
            <bronco-corner-navbar></bronco-corner-navbar>
          </div>
        </div>
      </div>

      <!-- bronco-corner-navbar customized -->
      <div class="row my-2 m-0 p-0 mt-5">
        <div class="col-12 col-lg-6 componentInfo">
          <span class="comment">&lt!-- Detailed Documentation on <a class="comment" target="_blank" href="https://github.com/marius2502/bronco-corner-navbar"
              class="attributeName"><strong>Github</strong></a> --></span>
          <a style="float:right" target="_blank" href="https://codepen.io/marius2502/pen/pXYwYB">
            <i class="material-icons" target="_blank" href="https://codepen.io/marius2502/pen/pXYwYB">launch</i>
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
            <span class="attribute">--primary-color: <span class="attributeName">rgb(52, 255, 52);</span></span>
            <br>
            <span style="color:white">}</span>
            <br>
            <br>
            <span class="tag">&lt/style></span>
        </div>
        <div class="col-12 col-lg-6">
          <div class="row d-flex justify-content-center">
            <bronco-corner-navbar class="green"></bronco-corner-navbar>
          </div>
        </div>
      </div>
`;
  }

}
