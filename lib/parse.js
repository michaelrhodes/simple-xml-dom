module.exports = function (Parser) {
  var parser = new Parser

  return function (string) {
    return parser.parseFromString(string, 'text/xml')
  }
}
