
var test = require("tap").test;

var isDST = require("./dst.js").isDST;

test("March 1st", function (t) {
    var date = new Date(2015, 2, 1);
    t.ok(!isDST(date), "Should NOT be DST");
    t.end();
});

test("March 10th", function (t) {
    var date = new Date(2015, 2, 10);
    t.ok(isDST(date), "Should be DST");
    t.end();
});

test("October 31st", function (t) {
    var date = new Date(2015, 9, 31);
    t.ok(isDST(date), "Should be DST");
    t.end();
});

test("November 10th", function (t) {
    var date = new Date(2015, 10, 10);
    t.ok(!isDST(date), "Should NOT be DST");
    t.end();
});
