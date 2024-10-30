
function validateItemDescription(text){
   return  text.match("^[0-9]*$") || text.length < 8 ? false : true;     
}

console.log(validateItemDescription(String("2343343234S")))