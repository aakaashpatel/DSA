let age = Number(prompt("Please enter your age : "));
console.log(age);

if (isNaN(age)) {
  console.log("Invalid input");
} else if (age >= 18) {
  console.log("you can vote");
} else {
  console.log("you cannot vote");
}
