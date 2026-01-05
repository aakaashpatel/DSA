const handleSubmit = () => {
  const number = document.getElementById("prompt").value;

  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum += i;
  }
  console.log(sum);
};
