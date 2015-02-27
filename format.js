var leading = /^(\s+)/
var declarationTrail = /<(!|\?)[^>]+>(\s+)/g
var declaration = /(<(!|\?)[^>]+>)/g

module.exports = function (a, b) {
  var hasB = typeof b === 'string'

  var indent = (function () {
    if (!hasB) return
    return (b.match(leading) || [])[0]
  })() || ''

  var spaces = (function () {
    if (!hasB) return
    var spaces = []
    var match
    while (match = declarationTrail.exec(b), !!match)
      if (match[2]) spaces.push(match[2])
    return spaces
  })() || '\n'

  var line  = 0
  var last = spaces[spaces.length - 1]
  return indent + a.replace(declaration, function (m, $1) {
    return $1 + (spaces[line++] || last)
  })
}
