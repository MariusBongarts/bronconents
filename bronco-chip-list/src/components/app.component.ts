import { css, customElement, html, LitElement, property, unsafeCSS, query } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import 'materialize/index';

const componentCSS = require('./app.component.scss');

/**
 * Modern chip
 * @event clicked - Dispatches when chip is clicked.
 * @event removed - Dispatched when removed is clicked.
 * @slot - Default content.
 * @cssprop --bg-color - Background color
 * @cssprop --height - Height of the chip
 *
 */
@customElement('bronco-chip-list')
export class BroncoChipList extends LitElement {

  static styles = css`${unsafeCSS(componentCSS)}`;

  @property()
  chips = ['Wirtschaft'] as string[];

  emit() {
    this.dispatchEvent(
      new CustomEvent('clicked', {
        bubbles: true
      })
    );
  }

  submitChip(e: KeyboardEvent) {
    const target = e.target as HTMLInputElement;
    if (e.key === 'Enter') {
      const tags = target.value.split(' ');
      this.chips = [...this.chips, ...tags];
      target.value = '';
    }

    if (e.key === 'Backspace' && this.chips.length && !target.value.length) {
      this.chips = this.chips.slice(0, this.chips.length - 1);
      target.value = '';
    }

  }

  render() {
    return html`
<div class="chip-list">
${this.chips.map(chip => html`
<bronco-chip @deleted=${() => this.chips = this.chips.filter(e => e !== chip)}>${chip}</bronco-chip>
`)}
        <input placeholder="Add tag" type="text" class="form-control ${this.chips.length ? 'not-empty' : ''}" name="tag"  id="tag"  @keydown=${(e: any) => this.submitChip(e)}>
</div>
`;
  }

}
