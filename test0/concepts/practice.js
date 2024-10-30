let data =[
    {"name":"Han","amtBid":250},
    {"name":"Han","amtBid":500},
    {"name":"Han","amtBid":500},
    {"name":"Han","amtBid":1000},
    {"name":"James","amtBid":1000},
    {"name":"Jean-Luc","amtBid":500}
];
let modified=[];
// var amount=0;
// var donerName="";
// city.splice(city.indexOf("Haryana"),1);
// console.log(city);
data.forEach(function(dataObject) {
    let index = modified.findIndex( modObj => modObj.name === dataObject.name);//[ { name: 'Han', amtBid: 2250 }, { name: 'James', amtBid: 1000 }, { name: 'Jean-Luc', amtBid: 500 } ]
    index < 0 ? modified.push(dataObject): modified[index].amtBid += dataObject.amtBid
    // if(!modified[dataObject.name]) { //{ Han: 2250, James: 1000, 'Jean-Luc': 500 }
    //     modified[dataObject.name] = 0;
    // }
    // modified[dataObject.name] += dataObject.amtBid
});

console.log(modified)