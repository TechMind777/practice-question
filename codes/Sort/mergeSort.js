function mergeSort (arr) {
    if (arr.length < 2) return arr;
    var mid = Math.floor(arr.length /2);
    var subLeft = mergeSort(arr.slice(0,mid));
    var subRight = mergeSort(arr.slice(mid));
    return merge(subLeft, subRight);
  }

  function merge (a,b) {
    var result = [];
    while (a.length >0 && b.length >0)
        result.push(a[0] < b[0]? a.shift() : b.shift());
    return result.concat(a.length? a : b);
}

var test = [5,6,7,3,1,3,15];
console.log(mergeSort(test));

//>> [1, 3, 3, 5, 6, 7, 15]