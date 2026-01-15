const handleSubmit = () => {
  const star = document.getElementById("prompt").value;

  if (star === "") {
    console.log("Enter the value");
    return;
  }

  for (let i = star; i >= 1; i--) {
    let pattern = "";

    for (let j = 1; j <= i; j++) {
      pattern += "*";
    }

    console.log(pattern);
  }
};

handleSubmit();
