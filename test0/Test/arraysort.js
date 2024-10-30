var numbers = [12, 10, 15, 11, 14, 13, 16];
var result=false;
while(!result){
    result=true;
    for(var i=1;i<numbers.length;i++){
        if(numbers[i-1]>numbers[i]){
            result=false;
            var temp=numbers[i-1];
            numbers[i-1]=numbers[i];
            numbers[i]=temp;
        }
    }
}


console.log(numbers)
