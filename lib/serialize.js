var wsdec = /<(!|\?)[^>]+>(\s+)</g
var dec = /(<(!|\?)[^>]+>)</g

module.exports = function (Serializer) {
  var serializer = new Serializer

  return function (dom, hero) {
    var string = serializer.serializeToString(dom)

    if (typeof hero !== 'string')
      return string

    var whitespace = (function () {
      var ws = []
      var match
      while (match = wsdec.exec(hero), !!match)
        if (match[2]) ws.push(match[2])
      return ws[0] || ''
    })()

    return string
      .replace(dec, '$1' + whitespace + '<')
  }
}
