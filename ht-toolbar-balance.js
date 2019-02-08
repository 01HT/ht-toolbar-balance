"use strict";
import { LitElement, html, css } from "lit-element";
import "@polymer/paper-styles/default-theme.js";

class HTToolbarBalance extends LitElement {
  static styles = css`<style>
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
  </style>`;

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
