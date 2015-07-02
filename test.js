var tap = require('tape')
var eachCons = require('./')

tap.test('returns consecutive elements', function(t){
  var arr = [1, 2, 3]
  var result = eachCons(arr, 3)
  t.deepEquals(result, [[1, 2, 3]])
  t.end()
})

tap.test('does not return empty cells', function(t){
  var arr = [1, 2]
  var result = eachCons(arr, 3)
  t.deepEquals(result, [])
  t.end()
})

tap.test('stacks em up, yeah', function(t){
  var arr = [1, 2, 3, 4, 5]
  var result = eachCons(arr, 3)
  t.deepEquals(result, [[1, 2, 3], [2, 3, 4], [3, 4, 5]])
  t.end()
})
