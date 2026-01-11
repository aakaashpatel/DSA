function findLeapYear() {
  const input = document.getElementById("prompt").value;

  // Empty input check
  if (input === "") {
    console.log("Enter the year");
    return;
  }

  const year = Number(input);

  // Leap year logic
  if (
    (year % 400 === 0) ||
    (year % 4 === 0 && year % 100 !== 0)
  ) {
    console.log("Leap Year");
  } else {
    console.log(year + " is not a leap year");
  }
}
