module.exports = function (Serializer) {
  var serializer = new Serializer

  return function (dom) {
    return serializer.serializeToString(dom)
  } 
}
