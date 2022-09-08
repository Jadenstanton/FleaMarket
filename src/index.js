import { html, render } from "lit";
import { repeat } from "lit/directives/repeat";
import "./normalize.min.css";
import "./styles.css";

const rows = [
  {
    title: "Tech",
    stores: [
      "apple",
      "dell"
    ]
  },
  {
    title: "Automotive",
    stores: [
      "subaru"
    ]
  }
];

function Explore(rows = []) {
  const keyFn = (row) => row.title;
  return html`
    ${repeat(rows, keyFn, (row) => {
    return html`${Row(row)}`;
  })}
  `;
}

function Row({ title, stores }) {
  const keyFn = (store) => store;
  return html`
    <div class="ContentRow">
      <div class="ContentRow__title">${title}</div>
      <div class="ContentRow__items">
        <div class="ContentRow__spacer"></div>
        ${repeat(stores, keyFn, (store) => {
    return html`${Art(store)} `;
  })}
      </div>
    </div>
  `;
}

function Art(store) {
  return html`
    <button
      class="ContentTile"
      style="background-image:url(img/${store}.jpg)"
    ></button>
    <div class="ContentRow__spacer"></div>
  `;
}

render(Explore(rows), document.querySelector(".Explore"));
