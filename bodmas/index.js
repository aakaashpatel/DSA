const handleSubmit = () => {
    console.time()
  const number = document.getElementById("prompt").value;

  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum += i;
  }
  console.log(sum);
  console.timeEnd();
};

// checking the time complexity
