import { LitElement, html, css } from 'lit-element';

export class ScoreDisplay extends LitElement {
    static get properties () {
        return {
            score: { type: Number, attribute: true },
            scoreText: {type: String}
        }
    }

    static get styles () {
        return css`
            :host {
              display: block;
              margin: 10px auto;
              padding: 10px;
              height: 20px;
            }
        `;
    }

  constructor () {
    super();
    this.score = 0;
    this.texts = ['absolutely nothing', 'one', 'two', 'three', 'more than three', 'many more than three', 'many', 'many many', 'oh so many', 'this is annoying', 'this is VERY annoying', 'go bother someone else'];
    this.scoreText = this.transformScoreInText();
  }

  transformScoreInText () {
    return this.texts[this.score] || this.texts[this.texts.length - 1];
  }

  attributeChangedCallback(name, oldval, newval) {
    console.log('attribute change: ', name, newval);
    super.attributeChangedCallback(name, oldval, newval);

    if (name !== 'score') return;

    this.scoreText = this.transformScoreInText();
  }

  render () {
    return html`
      ${this.scoreText}
    `;
  }
}
customElements.define('score-display', ScoreDisplay);
