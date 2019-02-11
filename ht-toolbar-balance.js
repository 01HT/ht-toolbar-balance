"use strict";
import { LitElement, html, css } from "lit-element";
import "@polymer/paper-styles/default-theme.js";

import { stylesBasicWebcomponents } from "@01ht/ht-theme/styles";

class HTToolbarBalance extends LitElement {
  static get styles() {
    return [
      stylesBasicWebcomponents,
      css`
        a {
          display: flex;
          align-items: center;
          text-decoration: none;
          color: inherit;
          outline: none;
          color: var(--secondary-text-color);
        }

        #balance {
          font-size: 16px;
        }
      `
    ];
  }

  render() {
    const { href, balance } = this;
    return html`
      <a href="${href}">
        <div id="balance">₽${balance}</div>
      </a>
`;
  }

  static get properties() {
    return { href: { type: String }, balance: { type: Number } };
  }
}

customElements.define("ht-toolbar-balance", HTToolbarBalance);
