import { css, customElement, html, LitElement, property, unsafeCSS, query } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import 'materialize/index';

const componentCSS = require('./app.component.scss');

/**
 * Modern chip
 * @event tagsChanged - Dispatched when tags changed and returns array of tags
 * @slot - Default content.
 * @cssprop --bg-color - Background color
 * @cssprop --color - Font color
 * @cssprop --font-size - Font size
 * @cssprop --min-height - Min-height of the chip-list
 * @cssprop --primary-color - Primary color which is set on focus
 *
 */
@customElement('bronco-chip-list')
export class BroncoChipList extends LitElement {
  static styles = css`${unsafeCSS(componentCSS)}`;

  /**
   * Array of tags as strings
   *
   * @memberof BroncoChipList
   */
  @property()
  chips = [] as string[];

  /**
   * Property to prevent to fast deleting. So that user has to click backspace twice.
   *
   * @memberof BroncoChipList
   */
  @property()
  markedToDelete = false;

  firstUpdated() {
    document.addEventListener('click', () => this.markedToDelete = false);
  }

  emit() {
    this.dispatchEvent(
      new CustomEvent('tagsChanged', {
        bubbles: true,
        detail: this.chips
      })
    );
  }

  /**
   * Listen to keyboard event to either add or remove tags
   * Tags are being added when user enters space or enter
   *
   * @param {KeyboardEvent} e
   * @memberof BroncoChipList
   */
  submitChip(e: KeyboardEvent) {
    const target = e.target as HTMLInputElement;
    target.value ? this.markedToDelete = false : '';

    if (target.value && (e.key === 'Enter' || e.code === 'Space')) {
      this.addChip(target);
    }

    if (e.key === 'Backspace' && this.chips.length && !target.value.length) {
      this.deleteChip(target);
    }

    this.emit();
  }

  /**
   * Adds a tag if current value is not empty.
   * It splits the current value by space
   *
   * @param {HTMLInputElement} target
   * @memberof BroncoChipList
   */
  addChip(target: HTMLInputElement) {
    const tags = target.value.split(' ').filter(e => e.length > 1 && !this.chips.includes(e));
    this.chips = [...this.chips, ...tags];
    target.value = '';
  }

  /**
   * Deletes a tag if it is already markes as deleted.
   *
   * @param {HTMLInputElement} target
   * @memberof BroncoChipList
   */
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
