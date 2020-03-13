/*****************************************************************************/
/*   File: entity-attributes-in-picture-element.js                           */
/*   Desc: show attrs in picture-element of HASS ui-lovelace                 */
/* Create: 11 mar 2020                                                       */
/* Author: Đỗ Duy Cốp                                                        */
/*  Email: duycop@gmail.com                                                  */
/* Github: https://github.com/duycop                                         */
/*****************************************************************************/
class EntityAttributesCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({
      mode: 'open'
    });
  }
  setConfig(config) {
    const root = this.shadowRoot;
    const card = document.createElement('div');
    const content = document.createElement('div');
    content.innerHTML = `
      <div id='attributes'></div>
      `;
    card.appendChild(content);
    root.appendChild(card);
    this.config = config;
  }

  _updateContent(element, value) {
    element.innerHTML = `${value}`;
  }

  set hass(hass) {
    const root = this.shadowRoot;
    Object.keys(hass.states).sort().forEach(key => {
      if (key == this.config.entity) {
        var value = '';
        this.config.attrs.forEach(item => {
          var v = hass.states[key].attributes[item.attr];
          if (v) {
            value += item.before;
            value += v;
            value += item.after;
          } else value += '#'
        });
        this._updateContent(root.getElementById('attributes'), value);
      }
    });
  }
  getCardSize() {
    return 1;
  }
}
customElements.define('entity-attributes-in-picture-element', EntityAttributesCard);
