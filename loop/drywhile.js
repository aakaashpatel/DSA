let pr = prompt("Enter your number");

let n = Number(pr);

if (isNaN(n)) {
  console.log("Enter Number");
} else {
  if (n > 0) {
    let sum = 0;
    while (n > 0) {
      let digit = n % 10;    // आखिरी digit निकालना
      sum = sum + digit;     // sum में जोड़ना
      n = Math.floor(n / 10); // आखिरी digit हटाना
    }
    console.log("Sum of digits:", sum);
  } else {
    console.log("smaller than 0");
  }
}
