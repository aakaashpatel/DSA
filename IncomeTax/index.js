const handleSubmit = () => {
  const input = document.getElementById("prompt").value;

  // Empty check
  if (input === "") {
    console.log("Put the amount");
    return;
  }

  const number = Number(input);
  let total = 0;

  if (number <= 250000) {
    console.log("No Tax");
    total = 0;
  } 
  else if (number <= 500000) {
    console.log("5% Tax");
    total = (number * 5) / 100;
  } 
  else if (number < 1000000) {
    console.log("20% Tax");
    total = (number * 20) / 100;
  } 
  else {
    console.log("30% Tax");
    total = (number * 30) / 100;
  }
  console.log("Tax Amount:", total);
};
