// const handleSubmit = () => {
//     console.time()
//   const number = document.getElementById("prompt").value;

//   let sum = 0;
//   for (let i = 1; i <= number; i++) {
//     sum += i;
//   }
//   console.log(sum);
//   console.timeEnd();
// };

// checking the time complexity

// const handleSubmit = () => {
//   console.time();
//   const n = document.getElementById("prompt").value;

//   let sum = (n * (n + 1)) / 2;

//   console.log(sum);
//   console.timeEnd();
// };

// const handleSubmit = () => {
//   console.time("sum");
//   const n = BigInt(document.getElementById("prompt").value);
//   let sum = (n * (n + 1n)) / 2n;
//   let number = Number(sum.toString()); BigInt ko string me print karo
//   console.log(number);
//   console.timeEnd("sum");
// };

// product

// const handleSubmit = () => {
//   const number = BigInt(document.getElementById("prompt").value);
//   let product = 1;
//   for (let i = 1; i <= number; i++) {
//     product *= i;
//   }
//   console.log(product);
// };

// sum of even number & odd
// const handleSubmit = () => {
//   const number = document.getElementById("prompt").value;
//   let sum = 0;
//   for (let i = 1; i <= number; i++) {
//     if (i % 2 === 0) {
//       console.log(i);
//       sum += i;
//     }
//   }
//   console.log("sum", sum);
// };


// factorial 

const handleSubmit = () => {
  const number = document.getElementById("prompt").value;
  let product = 1;
  for (let i = 1; i <= number; i++) {
    console.log(i)
    product *= i
  }
  console.log("factorial", product);
};
