

var Test = require('./index.js');
var test = new Test.json();



var testJson={func:function(){ console.log("test")},'players': [ { 'fname': 'joe', 'lname': 'smith', 'number': '34'} ,  { 'fname': 'jim', 'lname': 'Hoff', 'number': '12'}, { 'fname': 'jack', 'lname': 'jones', 'number': '84'}]};
     
console.log(test.json(testJson));




 