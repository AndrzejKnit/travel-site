var $ = require('jquery');
var Person = require('./modules/Person');

alert("This test abc123");

var john = new Person("John Doe", "blue");
john.greet();

var jane = new Person("John Doe", "green");
jane.greet();

$("h1").remove();

