import { LitElement, html, css } from 'lit-element';
import { MyStore } from './store.js';

export class Scrambler extends LitElement {
  static get properties () {
    return {
      interval: {type: Number},
      randomNumber: {type: Number, attribute: false}
    }
  }

  constructor () {
    super();
    this.interval = 1;
    this.randomNumber = 0;
    this.processStoreChangesBound = this.processStoreChanges.bind(this)
    window.addEventListener('storeChanged', this.processStoreChangesBound);
  }

  connectedCallback () {
    super.connectedCallback();
    setInterval(() => {
      MyStore.randomNumber = this.randomize();
    }, this.interval * 1000);
  }
  disconnectedCallback () {
    super.disconnectedCallback();
    window.removeEventListener('storeChanged', this.processStoreChangesBound);
  }

  processStoreChanges (e) {
    let data = e.detail;

    if (data.key === 'randomNumber') {
      this.randomNumber = data.value;
    }
  }

  randomize () {
    return Math.round(Math.random() * 1000);
  }

  render () {
    return html`
      <div class="random-number">${this.randomNumber}</div>
    `;
  }
}
customElements.define('scrambler-tag', Scrambler);
