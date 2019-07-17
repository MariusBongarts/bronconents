import { css, customElement, html, LitElement, property, unsafeCSS, queryAll, query } from 'lit-element';

const componentCSS = require('./button-overview.component.scss');

@customElement('button-overview')
class AppComponent extends LitElement {

  static styles = css`${unsafeCSS(componentCSS)}`;

  render() {
    return html`
  <div class="container shadow">
    <h2>bronco-button <a style="float:right" target="_blank" title="Live demo" href="https://codepen.io/marius2502/pen/MMzboL">
        <i class="material-icons" target="_blank" href="https://codepen.io/marius2502/pen/MMzboL">launch</i>
      </a></h2>
    <div class="row my-5">
      <div class="col justify-content-center align-center">
        <div class="componentInfo">
          <span class="comment">&lt!-- Detailed Documentation on <a class="comment" target="_blank" href="https://github.com/marius2502/bronco-button"
              class="attributeName"><strong>Github</strong></a> --></span>
          <br>
          <br>
          <span class="tag">&ltbronco-button></span>
          <span style="color:white">Default</span>
          <span class="tag">&lt/bronco-button></span>
          <br>
          <br>
          <span class="tag">&ltbronco-button<span class="attribute"> outline</span>></span>
          <span style="color:white">Outline</span>
          <span class="tag">&lt/bronco-button></span>
          <br>
          <br>
          <span class="tag">&ltbronco-button<span class="attribute"> outlineeffect</span>></span>
          <span style="color:white">Outlineffect</span>
          <span class="tag">&lt/bronco-button></span>
          <br>
          <br>
          <span class="tag">&ltbronco-button<span class="attribute"> outline outlineeffect</span>></span>
          <span style="color:white">Both</span>
          <span class="tag">&lt/bronco-button></span>
        </div>
      </div>
      <div class="col justify-content-center align-center">
        <bronco-button>Default</bronco-button>
        <bronco-button outline>Outline</bronco-button>
        <bronco-button outlineEffect>Outlineffect</bronco-button>
        <bronco-button outline outlineEffect>Both</bronco-button>
      </div>
    </div>

    <div class="row my-5">
      <div class="col justify-content-center align-center">
        <div class="componentInfo">
          <span class="comment">&lt!-- Detailed Documentation on <a class="comment" target="_blank" href="https://github.com/marius2502/bronco-button"
              class="attributeName"><strong>Github</strong></a> --></span>
          <br>
          <br>
          <span class="tag">&ltbronco-button></span>
          <span style="color:white">Default</span>
          <span class="tag">&lt/bronco-button></span>
          <br>
          <br>
          <span class="tag">&ltbronco-button<span class="attribute"> outline</span>></span>
          <span style="color:white">Outline</span>
          <span class="tag">&lt/bronco-button></span>
          <br>
          <br>
          <span class="tag">&ltbronco-button<span class="attribute"> outlineeffect</span>></span>
          <span style="color:white">Outlineffect</span>
          <span class="tag">&lt/bronco-button></span>
          <br>
          <br>
          <span class="tag">&ltbronco-button<span class="attribute"> outline outlineeffect</span>></span>
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
      </div>
      <div class="col justify-content-center align-center">
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
