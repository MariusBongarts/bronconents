import { css, customElement, html, LitElement, property, unsafeCSS, queryAll, query } from 'lit-element';

const componentCSS = require('./button-overview.component.scss');

@customElement('button-overview')
class AppComponent extends LitElement {

  static styles = css`${unsafeCSS(componentCSS)}`;

  render() {
    return html`

      <div class="row my-5 pt-5">
        <div class="col-12">
          <h5>bronco-button</h5>
        </div>

        <!-- First -->
        <div class="col-12 col-lg-6 componentInfo">
          <span class="comment">&lt!-- Detailed Documentation on <a class="comment" target="_blank" href="https://github.com/marius2502/bronco-button"
              class="attributeName"><strong>Github</strong></a> --></span>
          <a style="float:right" target="_blank" href="https://codepen.io/marius2502/pen/pXYRXX">
            <i class="material-icons" target="_blank" href="https://codepen.io/marius2502/pen/pXYRXX">launch</i>
          </a>
          <br>
          <br>
          <span class="tag">&ltbronco-button></span>
          <span style="color:white">Default</span>
          <span class="tag">&lt/bronco-button></span>
          <br>
          <br>
          <span class="tag">&ltbronco-button<span class="attribute p-0 m-0"> outline</span>></span>
          <span style="color:white">Outline</span>
          <span class="tag">&lt/bronco-button></span>
          <br>
          <br>
          <span class="tag">&ltbronco-button<span class="attribute p-0 m-0"> outlineeffect</span>></span>
          <span style="color:white">Outlineffect</span>
          <span class="tag">&lt/bronco-button></span>
          <br>
          <br>
          <span class="tag">&ltbronco-button<span class="attribute p-0 m-0"> outline outlineeffect</span>></span>
          <span style="color:white">Both</span>
          <span class="tag">&lt/bronco-button></span>
        </div>
        <div class="col-12 col-lg-6 btns mt-5 mt-lg-0 d-flex align-items-center justify-content-center">
          <div class="row d-flex align-items-center justify-content-center">
            <bronco-button>Default</bronco-button>
            <bronco-button outline>Outline</bronco-button>
            <bronco-button outlineEffect>Outlineffect</bronco-button>
            <bronco-button outline outlineEffect>Both</bronco-button>
          </div>
        </div>
      </div>

      <div class="row my-2 mt-5">

        <!-- Second with customized styles -->
        <div class="col-12 col-lg-6 componentInfo">
          <span class="comment">&lt!-- Detailed Documentation on <a class="comment" target="_blank" href="https://github.com/marius2502/bronco-button"
              class="attributeName"><strong>Github</strong></a> --></span>
          <a style="float:right" target="_blank" href="https://codepen.io/marius2502/pen/MMzboL">
            <wl-icon target="_blank" href="https://codepen.io/marius2502/pen/MMzboL">launch</wl-icon>
          </a>
          <br>
          <br>
          <span class="tag">&ltbronco-button></span>
          <span style="color:white">Default</span>
          <span class="tag">&lt/bronco-button></span>
          <br>
          <br>
          <span class="tag">&ltbronco-button<span class="attribute p-0 m-0"> outline</span>></span>
          <span style="color:white">Outline</span>
          <span class="tag">&lt/bronco-button></span>
          <br>
          <br>
          <span class="tag">&ltbronco-button<span class="attribute p-0 m-0"> outlineeffect</span>></span>
          <span style="color:white">Outlineffect</span>
          <span class="tag">&lt/bronco-button></span>
          <br>
          <br>
          <span class="tag">&ltbronco-button<span class="attribute p-0 m-0"> outline outlineeffect</span>></span>
          <span style="color:white">Outlineffect</span>
          <span class="tag">&lt/bronco-button></span>
          <br>
          <br>
          <!-- Styling -->
          <span class="tag">&ltstyle></span>
          <span style="color:white">
            <br>
            <span class="tag">marius-button <span style="color:white"> {</span></span>
            <br>
            <span class="attribute">--primary-color: <span class="attributeName">rgb(52, 255, 52);</span></span>
            <br>
            <span class="attribute">--primary-color-hover: <span class="attributeName">rgb(52, 255, 52);</span></span>
            <br>
            <span style="color:white">}</span>
            <br>
            <span class="tag">&lt/style></span>
        </div>
        <div class="col-12 col-lg-6 mt-5 mt-lg-0 btns d-flex align-items-center justify-content-center">
          <div class="row d-flex align-items-center justify-content-center">
            <bronco-button class="green">Default</bronco-button>
            <bronco-button class="green" outline>Outline</bronco-button>
            <bronco-button class="green" outlineEffect>Outlineffect</bronco-button>
            <bronco-button class="green" outline outlineEffect>Both</bronco-button>
          </div>
        </div>
      </div>
`;
  }

}
