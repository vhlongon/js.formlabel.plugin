# JS.formlabel.plugin

JS only (dependency free) plugin that adds show / hide effect for form input labels 

### Version
0.0.1

### Installation

Download the plugin under *dist/scripts/js.formalabel.plugin.js*

Include the script tag at the bottom on the  page:

<script src="scripts/app.js"></script>

### Initialization

```javascript
var jsFormLabel = new JSformLabel();
// use default settings
jsFormLabel.init(settings);
```

### Options

| Option         | Description                                            | Default                                   |
|----------------|--------------------------------------------------------|-------------------------------------------|
| initClass      | class added to the body tag                            | 'js-formlabel-plugin'                     |
| callbackBefore | callback executed before plugin initialization         |        *none*                                  |
| callbackAfter  | callback executed after plugin initialization          |        *none*                                 |
| scope          | scope to iterate over the selector                     | document                                  |
| selector       | selector(s) to match against                           | 'input[type="text"], input[type="email"]' |
| focusColor     | background-color added to focused label                | '#0eaee8'                                 |
| textColor      | color added to the label                               | '#ffffff'                                 |
| speed          | animation transition time (in seconds)                 | '.3'                                      |
| customStyles   | if set to true no inline style is applied              | false                                     |
| height         | height of the selected inputs  and labels              | '25px'                                    |
| focusClass     | class added to the input field when on focus           | 'js-formlabel-plugin-focus'               |
| blurClass      | class added to the input field when leave focus (blur) | 'js-formlabel-plugin-blur'                |
|                |                                                        |                                           |
|                |                                                        |                                           |



### Compatibility

IE 10+, Chrome 1+, Safari 3.2+, FF 4+ and Opera 12+