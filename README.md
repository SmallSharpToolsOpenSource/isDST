isDST
=====

Given a date value it will return a boolean value indicating Daylight Savings.

DST is observed in certain regions of this time zone between the 2nd Sunday
in March and the 1st Sunday in November. [Wikipedia](https://en.wikipedia.org/wiki/Central_Time_Zone)

Usage
=====

````js
var isDST = require("isdst").isDST;

var now = new Date();
var dst = isDST(now);

console.log(dst ? "Daylight Savings Time" : "Standard Time");
````

### License

MIT

### Author

Brennan Stehling (@brennanmke, @smallsharptools)
