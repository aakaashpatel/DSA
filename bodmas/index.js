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

const handleSubmit = () => {
  console.time("sum");
  const n = BigInt(document.getElementById("prompt").value);
  let sum = (n * (n + 1n)) / 2n;
  console.log(sum); // BigInt ko string me print karo
  console.timeEnd("sum");
};
