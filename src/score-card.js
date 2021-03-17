import { LitElement, html, css } from 'lit-element';
import { ScoreDisplay } from './score-display.js';
import { Scrambler } from './scrambler.js';
import { MyStore } from './store.js';

export class ScoreCard extends LitElement {
    static get properties () {
        return {
          score: { type: Number, attribute: false },
          name: { type: String },
          randomNumber: {type: Number, attribute: false}
        }
    }

    static get styles () {
        return css`
            :host {
              display: block;
              margin: 10px auto;
              border: 1px grey dashed;
              padding: 10px;
              width: 500px;
              text-align: center;
            }

            button {
              display: inline-block;
              width: 30px;
              height: 30px;
              border-radius: 5px;
              background-color: green;
              border: solid 2px #090;
              color: white;
              cursor: pointer;
            }
        `;
    }

  constructor () {
    super();
    this.score = 0;
    this.randomNumber = MyStore.randomNumber;
  }

  handleClick (e) {
    e.preventDefault();
    this.score++;
  }

  render () {
    return html`
      <h2>${this.name}</h2>
      <button @click="${this.handleClick}">${this.score}</button>
      <score-display score="${this.score}"></score-display>
      <scrambler-tag interval="3"></scrambler-tag>
  `;
  }
}
customElements.define('score-card', ScoreCard);
