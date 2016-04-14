"use strict";

const isEmptyObj = require("../lib");

console.log(isEmptyObj({}));
// true

console.log(isEmptyObj([]));
// true

console.log(isEmptyObj([42]));
// false

console.log(isEmptyObj({ location: "mars" }));
// false
