const handleSubmit = () => {
  const a = Number(document.getElementById("prompt").value);
  const b = Number(document.getElementById("number2").value);
  const c = Number(document.getElementById("number3").value);

  // Empty or invalid input check
  if (!a || !b || !c) {
    console.log("Please enter all sides");
    return;
  }

  // ye number ko sort kar rha h .. finding the largest number
  const sides = [a, b, c].sort((x, y) => x - y);
  const [x, y, z] = sides;
  // dry run find

  // Right angle triangle
  if (x * x + y * y === z * z) {
    console.log("Right angle triangle");
  }
  // Equilateral triangle
  else if (a === b && b === c) {
    console.log("Equilateral triangle");
  }
  // Isosceles triangle
  else if (a === b || b === c || a === c) {
    console.log("Isosceles triangle");
  }
  // Scalene triangle
  else {
    console.log("Scalene triangle");
  }
};
