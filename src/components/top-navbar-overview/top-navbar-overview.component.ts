import { css, customElement, html, LitElement, property, unsafeCSS, queryAll, query } from 'lit-element';
import 'weightless/icon';

const componentCSS = require('./top-navbar-overview.component.scss');

@customElement('top-navbar-overview')
class AppComponent extends LitElement {

  static styles = css`${unsafeCSS(componentCSS)}`;

  render() {
    return html`
      <!-- bronco-top-navbar -->
      <div class="row my-2 pt-5 my-5">
        <div class="col-12">
          <h5>bronco-top-navbar</h5>
        </div>
        <!-- First -->
        <div class="col-12 my-5">
          <div class="row d-flex justify-content-center">
            <bronco-top-navbar></bronco-top-navbar>
          </div>
        </div>
        <div class="col-12 col-lg-6 componentInfo">
          <span class="comment">&lt!-- Detailed Documentation on <a class="comment" target="_blank" href="https://github.com/marius2502/bronco-top-navbar"
              class="attributeName"><strong>Github</strong></a> --></span>
          <a style="float:right" target="_blank" href="https://codepen.io/marius2502/pen/pXYwYB">
            <wl-icon target="_blank" href="https://codepen.io/marius2502/pen/pXYwYB">launch</wl-icon>
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
`;
  }

}
