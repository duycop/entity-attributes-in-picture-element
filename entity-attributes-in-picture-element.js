/*****************************************************************************/
/*   File: entity-attributes-in-picture-element.js                           */
/*   Desc: show attrs in picture-element of HASS ui-lovelace                 */
/* Create: 11 mar 2020                                                       */
/* Author: Đỗ Duy Cốp                                                        */
/*  Email: duycop@gmail.com                                                  */
/* Github: https://github.com/duycop                                         */
/*****************************************************************************/
class EntityAttributesPicture extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({
      mode: 'open'
    });
  }
  getAttrs() {
    var value = '';
    this.config.attrs.forEach(item => {
      var v = hass.states[this.config.entity].attributes[item.attr];
      if (v) {
        if (typeof item.before !== "undefined") value += item.before;
        if (item.kalip) v = Math.round(v * item.kalip);
        value += v;
        if (typeof item.after !== "undefined") value += item.after;
      } else value += '#';
    });
    return value;
  }
  setConfig(config) {
    if (!config.entity) {
      throw new Error('You need to define an entity');
    }
    this.config = config;
    const root = this.shadowRoot;
    root.innerHTML = getAttrs();
  }
  set hass(hass) {
    const root = this.shadowRoot;
    root.innerHTML = getAttrs();
  }
  getCardSize() {
    return 1;
  }
}
customElements.define('entity-attributes-in-picture-element', EntityAttributesPicture);
