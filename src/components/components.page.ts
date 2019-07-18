import { router } from './../services/router';
import { css, customElement, html, LitElement, property, unsafeCSS, queryAll, query } from 'lit-element';

const componentCSS = require('./components.page.scss');

const logoSvg = require('./../assets/logo.svg');

/**
 * @author Marius Bongarts
 * Root web component
 */
@customElement('components-page')
export class ComponentsPage extends LitElement {

  static styles = css`${unsafeCSS(componentCSS)}`;

  @property()
  navItems = ['bronco-button', 'bronco-corner-navbar', 'bronco-left-navbar', 'bronco-searchbar', 'bronco-side-navbar', 'bronco-template', 'bronco-top-navbar'];

  @property()
  selectedItem: string | any;

  @property()
  loaded = false;

  @queryAll('section')
  sectionElements!: HTMLElement[];

  firstUpdated() {
    let param = router.getParams();

    param && param.key == 'component' ? this.selectedItem = param.value : '';

    // this.sectionElements.forEach(e => {
    //   (e.offsetTop - 200) < document.documentElement.scrollTop ? this.selectedItem = e.getAttribute('id') : '';
    // });
    console.log(this.selectedItem);


    router.subscribe(route => {
      let param = router.getParams();
      console.log(param);
      param && param.key == 'component' ? this.selectedItem = param.value : this.selectedItem = this.navItems[0];
      route === 'components'.toLowerCase() ? this.scrollToSection(this.selectedItem) : '';
    });

    setTimeout(() => {
      this.scrollToSection(this.selectedItem);
    }, 100);

  }

  scrollToSection(item: string) {
    console.log(item);
    let sectionElement!: HTMLElement;
    this.sectionElements.forEach(e => {
      if (e.getAttribute('id') === item) sectionElement = e;
    });
    window.scrollTo({
      top: sectionElement.offsetTop,
      left: 0,
      behavior: 'smooth'
    });
  }

  render() {
    return html`
      <section id='bronco-button'>
        <button-overview></button-overview>
      </section>

      <section id='bronco-corner-navbar'>
        <corner-navbar-overview></corner-navbar-overview>
      </section>

      <section id='bronco-left-navbar'>
        <left-navbar-overview></left-navbar-overview>
      </section>

      <section id='bronco-searchbar'>
        <searchbar-overview></searchbar-overview>
      </section>

      <section id='bronco-side-navbar'>
        <side-navbar-overview></side-navbar-overview>
      </section>

      <section id='bronco-template'>
        <template-overview></template-overview>
      </section>

      <section id='bronco-top-navbar'>
        <top-navbar-overview></top-navbar-overview>
      </section>
`;
  }

}
