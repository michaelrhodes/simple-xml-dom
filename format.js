var wsdec = /<(!|\?)[^>]+>(\s+)/g
var dec = /(<(!|\?)[^>]+>)/g

module.exports = function (a, b) {
  var ws = (function () {
    if (typeof b !== 'string') return

    var ws = []
    var match

    while (match = wsdec.exec(b), !!match)
      if (match[2]) ws.push(match[2])
    return ws[0]
  })() || '\n'

  return a.replace(dec, '$1' + ws)
}
