const number = Number(prompt("Enter your number"));

if (number === null) {
  console.log(cancel);
}

if (isNaN(number)) {
  console.log("invalid input");
} else if (number < 0) {
  console.log("number should be +ve");
} else {
  let sum = 0;
  let divi = 1;
  for (let i = 1; i <= number; i++) {
    sum += i;
    divi *= i;
  }
  console.log(sum);
  console.log(divi);
}

// console.log(number)

// optimized, clean, and evaluated

// const input = prompt("Enter your number");

// // Check if input is cancelled or empty
// if (input === null || input.trim() === "") {
//   console.log("Input cancelled or empty");
// } else {
//   const number = Number(input.trim());

//   if (isNaN(number)) {
//     console.log("Invalid input: not a number");
//   } else if (number < 0) {
//     console.log("Number should be positive");
//   } else {
//     const intNumber = Math.floor(number); // Remove decimals

//     // ✅ Sum using formula: n * (n + 1) / 2
//     const sum = (intNumber * (intNumber + 1)) / 2;

//     // ✅ Factorial using loop
//     let factorial = 1;
//     for (let i = 1; i <= intNumber; i++) {
//       factorial *= i;
//     }

//     console.log(`Sum of 1 to ${intNumber}:`, sum);
//     console.log(`Factorial of ${intNumber}:`, factorial);
//   }
// }


// const input = prompt("Enter your number")?.trim();

// if (!input) {
//   console.log("Input cancelled or empty");
// } else {
//   const num = Math.floor(Number(input));
//   if (isNaN(num)) return console.log("Invalid input");
//   if (num < 0) return console.log("Number should be positive");

//   const sum = (num * (num + 1)) / 2;
//   let fact = 1;
//   for (let i = 2; i <= num; i++) fact *= i;

//   console.log("Sum:", sum);
//   console.log("Factorial:", fact);
// }
