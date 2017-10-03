(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');

  nx.max = function (inArray) {
    return Math.max.apply(null,inArray);
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.max;
  }

}());
