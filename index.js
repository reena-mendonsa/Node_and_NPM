const lodash = require("lodash");
const moment = require("moment");


console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
console.log(moment().format('dddd'));
console.log(moment().format("MMM Do YY"));


console.log(moment('2020-01-01','YYYY MM DD').isValid());
console.log(moment('2020-14-01','YYYY MM DD').isValid());


console.log(moment().add(7, 'days').calendar());
console.log(moment().add(7, 'months').calendar());
console.log(moment().add(7, 'years').calendar());

console.log(moment().subtract(7, 'days').calendar());
console.log(moment().subtract(7, 'months').calendar());
console.log(moment().subtract(7, 'years').calendar());


var date1 = moment('2014-11-11');
var date2 = moment('2015-09-11');
var diff = date2.diff(date1,'days');
console.log(diff);

var date1 = moment('2014-11-27');
var date2 = moment('2015-09-16');
var diff = date2.diff(date1,'months');
console.log(diff);


console.log(moment('2020-01-01').isAfter('2018-01-01'));
console.log(moment('2010-01-01').isAfter(' 2018-01-01'));


console.log(moment('2019').isLeapYear());
console.log(moment('2020').isLeapYear());

//lodash

let arr = ["a", "b", "c", "d"];

let chunked = lodash.chunk(arr, 2);

console.log(chunked);

let arr2 = ["a", "b", "", 0, false, true, 1, "c"];

let compactedArr = lodash.compact(arr2);
console.log(compactedArr);

var array = [1];
var other = lodash.concat(array, 2, [3], [[4]]).flat();
 
console.log(other);

console.log(lodash.difference([2, 1], [2, 3]));

console.log(lodash.drop([1, 2, 3], 2));
