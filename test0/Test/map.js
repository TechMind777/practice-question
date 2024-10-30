let data=[3,1,7,12,23,45];

var result1=data.map(function(value){
    return value+1;
})
var result2=data.forEach(function(value){
    return  value+1;
})
console.log('data', data); //  data [ 3, 1, 7, 12, 23, 45 ]
console.log('result1', result1); // result1 [ 4, 2, 8, 13, 24, 46 ]
console.log('result2', result2); // result2 undefined
console.log("Map always return copy of each element present in array"+'\n'+
 "it does not modify the element of mapped array")



