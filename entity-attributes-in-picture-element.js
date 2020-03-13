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

  _updateContent(element, value, title) {
    element.innerHTML = `${value}`;
    element.title = `${title}`;
  }

  set hass(hass) {
    const root = this.shadowRoot;
    Object.keys(hass.states).sort().forEach(key => {
      if (key == this.config.entity) {
        var value = '';
        var title = '';
        this.config.attrs.forEach(item => {
          var v = hass.states[key].attributes[item.attr];
          if (v) {
            value += item.before;
            value += (item.kalip===undefined)?v:Math.round(v*item.kalip);
            value += item.after;
            
          } else value += '#'
          title = hass.states[key].last_changed;
          //console.info("======================================");
          //console.info(key);
          //for(var i in hass.states[key])console.info(i);
        });
        this._updateContent(root.getElementById('attributes'), value, title);
      }
    });
  }
  getCardSize() {
    return 1;
  }
}
customElements.define('entity-attributes-in-picture-element', EntityAttributesCard);
