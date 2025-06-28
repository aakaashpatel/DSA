// let arr = [10, 20, 30, 40, 50];
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
//   // console.log(sum)
// }
// console.log(sum);
let arr = [];
let size = Number(prompt("Enter number of elements:"));

for (let i = 0; i < size; i++) {
  let value = Number(prompt(`Enter value ${i + 1}:`));
  arr.push(value);
}

let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

console.log("Array:", arr);
console.log("Sum:", sum);
