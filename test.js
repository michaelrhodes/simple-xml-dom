var test = require('tape')
var parse = require('./parse')
var serialize = require('./serialize')
var format = require('./format')

test('basic', function (assert) {
  var source = '<hello>world</hello>'
  var dom = parse(source)
  var string = serialize(dom)

  assert.equal(dom.documentElement.textContent, 'world')
  assert.equal(string, source)
  assert.end()
})

test('formatted', function (assert) {
  var source = (
    ' <?xml version="1.0" encoding="UTF-8"?>\n' +
    '<!DOCTYPE plist PUBLIC "-//Apple Computer//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">\r\n' + 
    '<plist version="1.0">\n' +
    '<dict>\n\t' +
      '<key>hello</key>\n\t' +
      '<string>world</string>\n' +
    '</dict>\n' +
    '</plist>'
  )

  var dom = parse(source)
  var string = serialize(dom)
  var formatted = format(string, source)

  assert.equal(dom.documentElement.nodeName, 'plist')
  assert.notEqual(string, source)
  assert.equal(formatted, source)
  assert.end()
})
