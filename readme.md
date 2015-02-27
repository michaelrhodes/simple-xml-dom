# simple-xml-dom

simple-xml-dom is a thin wrapper around [DOMParser](https://developer.mozilla.org/en-US/docs/Web/API/DOMParser) and [XMLSerializer](https://developer.mozilla.org/en-US/docs/XMLSerializer) that makes parsing and serializing XML more pleasant. It depends on [xmldom](https://npm.im/xmldom) in node, and native implementations in the browser.

[![Build status](https://travis-ci.org/michaelrhodes/simple-xml-dom.svg?branch=master)](https://travis-ci.org/michaelrhodes/simple-xml-dom)

## Install
``` sh
$ npm install simple-xml-dom
```
**note: xmldom is not installed alongside simple-xml-dom**

### Usage

#### Basic
The available methods are `parse` and `serialize`.

```js
var xml = require('simple-xml-dom')

// Parse 
var dom = xml.parse('<hello>world</hello>')
dom.documentElement.textContent
> 'world'

// Serialize
dom.documentElement.textContent = 'dexter morgan'
xml.serialize(dom)
> '<hello>dexter morgan</hello>'
```

#### A more modular approach
Sometimes you only need to `parse` *or* `serialize`, and in these cases it makes sense to only require a single method.

```js
var parse = require('simple-xml-dom/parse')
var serialize = require('simple-xml-dom/serialize')

serialize(parse('<hello>world<hello>'))
> '<hello>world</hello>'
```

#### Format correction
XMLSerialize collapses the whitespace surrounding declarations, so the `format` method exists to restore these characters.

```js
var xml = require('simple-xml-dom')
var format = require('simple-xml-dom/format')

var source = '<?xml version="1.0" encoding="UTF-8"?>\r\n<hello>world</hello>'

// Whitespace collapsed
xml.serialize(xml.parse(source))
> '<?xml version="1.0" encoding="UTF-8"?><hello>world</hello>'

// Whitespace restored
format(xml.serialize(xml.parse(source)), source)
> '<?xml version="1.0" encoding="UTF-8"?>\r\n<hello>world</hello>'
```

The second argument is optional. If present, whitespace from `source` will be adopted by the `serialize` output’s declarations. If not, a new-line character will be inserted after every declaration.

### License
[MIT](http://opensource.org/licenses/MIT)
