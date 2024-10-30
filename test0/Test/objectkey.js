const people = [
    { name: 'Lee', age: 21 },
    { name: 'Ajay', age: 20 },
    { name: 'Tony', age: 21 },
    { name: 'Steave', age: 21 },
    { name: 'thanos', age: 20 },
    { name: 'Vormir', age: 20 }
 ];
var sorted={};
people.forEach(function(object){
    if(sorted[object.age]){
        sorted[object.age].push(object);

    }else{
        var array=[];
        array.push(object);
        sorted[object.age]=array;
    }
})
console.log(sorted) 
/**{
  '20': [
    { name: 'Ajay', age: 20 },
    { name: 'thanos', age: 20 },
    { name: 'Vormir', age: 20 }
  ],
  '21': [
    { name: 'Lee', age: 21 },
    { name: 'Tony', age: 21 },
    { name: 'Steave', age: 21 }
  ]
}
 */