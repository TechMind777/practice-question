

let data=[3,1,7,12,23,45]
let sorted=data.sort((a,b)=>{
    return a-b
});

console.log(" data ",data)
console.log(" sorted ",sorted)
sorted=[]
console.log(" data ",data)
console.log(" sorted ",sorted)


// data  [ 1, 3, 7, 12, 23, 45 ]
// sorted  [ 1, 3, 7, 12, 23, 45 ]
// data  [ 1, 3, 7, 12, 23, 45 ]
//  sorted  []