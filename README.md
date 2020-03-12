# entity-attributes-in-picture-element
Show attributes of entity in picture-elements (HASS UI-LOVELACE)

#syntax
type: "custom:entity-attributes-in-picture-element"
entity: (required)
attrs: array of attr (required), each item : {attr, before, after}

#json data:
{
  "entity": "switch.xiaomi_powertrip",
  "type": "custom:entity-attributes-in-picture-element",
  "attrs": [
    {
      "attr": "load_power",
      "before": "",
      "after": "W"
    },
    {
      "attr": "temperature",
      "before": ".&nbsp;",
      "after": "W"
    }
  ]
}

#yaml demo
entity: switch.xiaomi_powertrip
type: custom:entity-attributes-in-picture-element
attrs:
- attr: load_power
  before: ''
  after: W
- attr: temperature
  before: ".&nbsp;"
  after: W

#demo in ui-lovelace.yaml
      - type: picture-elements
        image: /local/images/my_home.png
        elements:
          - entity: binary_sensor.xiaomi_motion
            type: "custom:entity-attributes-in-picture-element"
            attrs:
            - attr: "No motion since"
              before: ''
              after: 'm'
              kalip: 1.0/60
            style:
              left: 59%
              top: 26%
              width: 40px
              align: left
          - entity: switch.zimi_powerstrip
            type: "custom:entity-attributes-in-picture-element"
            attrs:
            - attr: load_power
              before: ''
              after: 'W'
            style:
              left: 92.5%
              top: 35%
              width: 40px
              align: right
          - entity: switch.xiaomi_powertrip
            type: "custom:entity-attributes-in-picture-element"
            attrs:
            - attr: load_power
              before: ''
              after: 'W'
            - attr: temperature
              before: '.&nbsp;'
              after: 'C'
