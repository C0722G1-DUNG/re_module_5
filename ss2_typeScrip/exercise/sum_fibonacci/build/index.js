"use strict";
// happy coding 👻
console.log("hello world");
function fibonacci(number) {
    if (number <= 1) {
        return number;
    }
    return fibonacci(number - 1) + fibonacci(number - 2);
}
let sum = 0;
let number = 10;
let array = [];
for (let i = 0; i <= number; i++) {
    array.push(fibonacci(i));
    sum += fibonacci(i);
}
console.log(sum);
console.log(array);
