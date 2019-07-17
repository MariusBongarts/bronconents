import { css, customElement, html, LitElement, property, unsafeCSS, queryAll, query } from 'lit-element';

const componentCSS = require('./left-navbar-overview.component.scss');

@customElement('left-navbar-overview')
class AppComponent extends LitElement {

  static styles = css`${unsafeCSS(componentCSS)}`;

  render() {
    return html`
  <div class="container shadow">
    <h2>bronco-left-navbar <a style="float:right" target="_blank" href="https://codepen.io/marius2502/pen/pXYwYB">
        <i class="material-icons" target="_blank" href="https://codepen.io/marius2502/pen/pXYwYB">launch</i>
      </a></h2>
    <div class="row my-5">
      <div class="col justify-content-center align-center">
        <div class="componentInfo">
          <span class="comment">&lt!-- Detailed Documentation on <a class="comment" target="_blank" href="https://github.com/marius2502/bronco-left-navbar"
              class="attributeName"><strong>Github</strong></a> --></span>
          <br>
          <br>
          <span class="tag">&ltbronco-left-navbar></span>
          <span class="tag">&lt/bronco-left-navbar></span>
          <br>
          <br>
          <!-- Styling -->
          <span class="tag">&ltstyle></span>
          <br>
          <span style="color:white">
            <br>
            <span class="tag">bronco-left-navbar<span style="color:white"> {</span></span>
            <br>
            <span class="attribute">--position: <span class="attributeName">relative;</span></span>
            <br>
            <span style="color:white">}</span>
            <br>
            <br>
            <span class="tag">&lt/style></span>
        </div>
      </div>
      <div class="col justify-content-center align-center my-5">
        <bronco-left-navbar></bronco-left-navbar>
      </div>
    </div>

    <div class="row my-5">
      <div class="col justify-content-center align-center">
        <div class="componentInfo">
          <span class="comment">&lt!-- Detailed Documentation on <a class="comment" target="_blank" href="https://github.com/marius2502/bronco-left-navbar"
              class="attributeName"><strong>Github</strong></a> --></span>
          <br>
          <br>
          <span class="tag">&ltbronco-left-navbar
            <span class="attribute">effect3d=<span class="attributeName">"false"<span class="tag">></span></span></span>
            <span class="tag">&lt/bronco-left-navbar></span>
            <br>
            <br>
            <!-- Styling -->
            <span class="tag">&ltstyle></span>
            <br>
            <span style="color:white">
              <br>
              <span class="tag">bronco-left-navbar<span style="color:white"> {</span></span>
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
      </div>
      <div class="col justify-content-center align-center my-5">
        <bronco-left-navbar effect3d=${false} class="green"></bronco-left-navbar>
      </div>
    </div>
  </div>
`;
  }

}
