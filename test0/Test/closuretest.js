function createBase(num){
    var numberToBeAdded=num;
    function add(givenNumber){
        var result=numberToBeAdded+givenNumber;
        console.log(result);
        return   result;
    }
     return add;
}

var addSix=createBase(6);
addSix(10); //return 16
addSix(21);//return 27