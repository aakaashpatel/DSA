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
