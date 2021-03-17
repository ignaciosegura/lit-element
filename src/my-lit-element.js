import { LitElement, html, css } from 'lit-element';
import { openWcLogo } from './open-wc-logo.js';

export class MyLitElement extends LitElement {
  static get properties() {
    return {
      title: { type: String, attribute: true },
    };
  }

  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        font-size: calc(10px + 2vmin);
        color: #1a2b42;
        max-width: 960px;
        margin: 0 auto;
        text-align: center;
        background-color: var(--lit-element-background-color);
      }

      main {
        flex-grow: 1;
      }

      .logo > svg {
        margin-top: 36px;
        animation: app-logo-spin infinite 20s linear;
      }

      @keyframes app-logo-spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    `;
  }

  constructor() {
    super();
    this.title = '';
  }

  connectedCallback () {
    super.connectedCallback();
  }

  attributeChangedCallback(name, oldval, newval) {
    console.log('attribute change: ', name, newval);
    super.attributeChangedCallback(name, oldval, newval);
  }

  render() {
    return html`
      <main>
        <div class="logo">${openWcLogo}</div>
        <h1>${this.title}</h1>
      </main>
    `;
  }
}
customElements.define('my-lit-element', MyLitElement);
