// 1.1
var jsonString1 = '{ "results" : "[1, 2, 3, 4, 5]" }';
var realObj1 = JSON.parse(jsonString1);
console.log(realObj1.results); // Should log [1, 2, 3, 4, 5]

//1.2
var jsonString2 = '{ "results" : [1, 2, 3, 4, 5, 6] }';
var realObj2 = JSON.parse(jsonString2);
console.log(Array.isArray(realObj2.results)); // Should log 'true'

//1.3
var jsonString3 = '{ "results" : "[1, 2, 3, 4, 5, 6]" }';
var realObj3 = JSON.parse(jsonString3);
console.log(realObj3.results); // Should log [1, 2, 3, 4, 5, 6]

//1.4
var jsonString4 = '{ "status" : true }';
var realObj4 = JSON.parse(jsonString4);
console.log(typeof realObj4.status); // Should log 'boolean'
