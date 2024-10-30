let numbers = [1, 4, 1, 2, 7, 5, 2];
let count = [];
let output =[];
let i = 0;
let max = Math.max(...numbers);

// initialize counter
for (i = 0; i <= max; i++) {
  count[i] = 0;
}

// initialize output array
for (i = 0; i < numbers.length; i++) {
  output[i] = 0;
}

for (i = 0; i < numbers.length; i++) {
  count[numbers[i]]++;
}

for (i = 1; i < count.length; i++) {
  count[i] += count[i-1];
}

for (i = numbers.length - 1; i >= 0; i--) { 
  output[--count[numbers[i]]] = numbers[i];
}

// output sorted array
for (i = 0; i < output.length; i++) {
  console.log(output[i]);
}
