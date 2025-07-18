let pr = prompt("Enter your number"); // 📥 Input from user

if (isNaN(pr)) {
  console.log("%cPlease enter a valid number", "color: red; font-weight: bold");
} else {
  pr = Number(pr); // Convert to number after checking
  if (pr > 0) {
    let sum = 0;
    while (pr > 0) {
      let rem = pr % 10;
      sum = sum + rem;
      pr = Math.floor(pr / 10);
    }
    console.log("%cSum of digits: " + sum, "color: green; font-weight: bold");
  } else {
    console.log("%cNumber should be positive and greater than 0", "color: orange; font-weight: bold");
  }
}
