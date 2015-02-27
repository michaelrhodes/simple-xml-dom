var declarationTrail = /<(!|\?)[^>]+>(\s+)/g
var declaration = /(<(!|\?)[^>]+>)/g

module.exports = function (a, b) {
  var spaces = (function () {
    if (typeof b !== 'string') return
    var spaces = []
    var match
    while (match = declarationTrail.exec(b), !!match)
      if (match[2]) spaces.push(match[2])
    return spaces
  })() || '\n'

  var line  = 0
  var last = spaces[spaces.length - 1]
  return a.replace(declaration, function (m, $1) {
    return $1 + (spaces[line++] || last)
  })
}
