// let sum = 0;
// let i = 10;
// while(i < 1) {
//     sum = sum +1;
//     sum = sum * 2;
//     i-=1
// }

// console.log(sum);

// const f  =  n => n <=1? 1: n*f(n-1)
// 4*3*2*1
// console.log(f(4))
function f1(a) {
    if(a === 0) return 1;

    return  a * f1(a - 1)
}

function main() {
    const f2 = (a, b) => Math.abs(2 * a - 3 * b)
    console.log(f1(f2(2, 3)))

}

main();