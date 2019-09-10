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

  @property()
  markedToDelete = false;

  firstUpdated() {
    document.addEventListener('click', () => this.markedToDelete = false);
  }

  emit() {
    this.dispatchEvent(
      new CustomEvent('clicked', {
        bubbles: true
      })
    );
  }

  submitChip(e: KeyboardEvent) {
    const target = e.target as HTMLInputElement;
    target.value ? this.markedToDelete = false : '';
    if (target.value && (e.key === 'Enter' || e.code === 'Space')) {
      this.addChip(target);
    }

    if (e.key === 'Backspace' && this.chips.length && !target.value.length) {
      this.deleteChip(target);
    }

  }

  addChip(target: HTMLInputElement) {
    const tags = target.value.split(' ').filter(e => e.length > 1 && !this.chips.includes(e));
    this.chips = [...this.chips, ...tags];
    target.value = '';
  }

  deleteChip(target: HTMLInputElement) {
    if (this.markedToDelete && !target.value && this.chips.length) {
      this.chips = this.chips.slice(0, this.chips.length - 1);
      this.markedToDelete = false;
    } else {
      this.markedToDelete = true;
      this.requestUpdate();
    }
  }

  render() {
    return html`
<div class="chip-list">
${this.chips.map((chip, index) => html`
<bronco-chip .deleteMode="${this.markedToDelete && index === this.chips.length - 1}"
@deleted=${() => this.chips = this.chips.filter(e => e !== chip)}

>${chip}</bronco-chip>
`)}

    <input placeholder="Add tag" type="text" class="form-control ${this.chips.length ? 'not-empty' : ''}" name="tag"  id="tag"  @keyup=${(e: any) => this.submitChip(e)}>
</div>
`;
  }

}
