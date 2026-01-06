function maxofthree(a, b, c) {
    let max;
//   debugger;
  if (a >= b && a >= c) {
    // 14 > b && 14 > 99  == false
    console.log("max number :", {a});
  } else if (  b >= {a}) {
    //  6 > 99 && 6 > 14 == false
    console.log("max number :", {b});
  } else {
    // 99 > 14 && 99 > 6
    console.log("max number :", {c});
  }
  return max
}
maxofthree(99, 99, 2);
