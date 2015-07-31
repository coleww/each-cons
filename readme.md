readme.md
--------------

[![NPM](https://nodei.co/npm/each-cons.png)](https://nodei.co/npm/each-cons/)

[![Build Status](https://secure.travis-ci.org/coleww/each-cons.png)](http://travis-ci.org/coleww/each-cons)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)


[each_cons](http://ruby-doc.org/core-2.2.2/Enumerable.html#method-i-each_cons) for node

`npm install each-cons`

```
var eachCons = require('each-cons')

eachCons([1,2,3,4], 3)
=> [[1,2,3], [2,3,4]]
```