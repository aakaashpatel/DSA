const handleSubmit = () => {
  const alphabet = document.getElementById("prompt").value;
  
  if (alphabet === "") {
    console.log("Please enter a letter");
    return;
  }
  if (
    alphabet === "a" ||
    alphabet === "e" ||
    alphabet === "i" ||
    alphabet === "o" ||
    alphabet === "u"
  ) {
    console.log("these are vowel");
  } else {
    console.log("these are consonant");
  }
};
handleSubmit();
