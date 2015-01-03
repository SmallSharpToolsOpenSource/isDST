isDST
=====

Daylight Savings Time

Usage
=====


````js
var isDST = require("isDST").isDST;

var now = new Date();
var dst = isDST(now);

console.log(dst ? "Is DST", "Is not DST");

````
