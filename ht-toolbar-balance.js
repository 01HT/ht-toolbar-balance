"use strict";
import { LitElement, html } from "@polymer/lit-element";
import "@polymer/paper-styles/default-theme.js";

class HTToolbarBalance extends LitElement {
  render() {
    const { href, balance } = this;
    return html`
      <style>
        :host {
          display: block;
          position: relative;
          box-sizing: border-box;
        }
      
        a {
          display:flex;
          align-items:center;
          text-decoration: none;
          color: inherit;
          outline: none;
          color:var(--secondary-text-color);
        }

        #balance {
          font-size:16px;
        }
      </style>

      <a href="${href}">
        <div id="balance">₽${balance}</div>
      </a>
`;
  }

  static get is() {
    return "ht-toolbar-balance";
  }

  static get properties() {
    return { href: { type: String }, balance: { type: Number } };
  }
}

customElements.define(HTToolbarBalance.is, HTToolbarBalance);
