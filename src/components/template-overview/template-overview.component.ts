import { css, customElement, html, LitElement, property, unsafeCSS, queryAll, query } from 'lit-element';

const componentCSS = require('./template-overview.component.scss');

const imgTemplate = require('./../../assets/template.png');

@customElement('template-overview')
class AppComponent extends LitElement {

  static styles = css`${unsafeCSS(componentCSS)}`;

  render() {
    return html`
  <div class="container shadow">
    <h2>bronco-template <a style="float:right" target="_blank" title="Live demo" href="https://codepen.io/marius2502/pen/KOKGRr">
        <i class="material-icons" target="_blank">launch</i>
      </a></h2>
    <div class="row my-5">
      <div class="col justify-content-center align-center">
        <div class="componentInfo">
          <span class="comment">&lt!-- Detailed Documentation on <a class="comment" target="_blank" href="https://github.com/marius2502/bronco-template"
              class="attributeName"><strong>Github</strong></a> --></span>
          <br>
          <br>
          <span class="tag">&ltbronco-template></span>

          <br>
          <br>
          <span class="tag">&ltdiv<span class="attribute"> slot=<span class="attributeName">"header"</span></span>>
          </span>
          <span style="color:white">
            Header
          </span>
          <span class="tag">&lt/div></span>

          <br>
          <br>
          <span class="tag">&ltdiv<span class="attribute"> slot=<span class="attributeName">"nav"</span></span>>
          </span>
          <span style="color:white">
            Nav
          </span>
          <span class="tag">&lt/div></span>

          <br>
          <br>
          <span class="tag">&ltdiv<span class="attribute"> slot=<span class="attributeName">"main"</span></span>>
          </span>
          <span style="color:white">
            Main
          </span>
          <span class="tag">&lt/div></span>


          <br>
          <br>
          <span class="tag">&lt/bronco-template></span>
          <br>
          <br>
        </div>
      </div>

    </div>

    <img src=${imgTemplate}>

  </div>
`;
  }

}
