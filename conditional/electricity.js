// const handleSubmit = () =>{

//   const number = Number(document.getElementById("prompt").value)
//    if(!number){
//     console.log("No number")
//    }
//   if(number >=1 && number <= 100){
//     console.log(" 5 Rupee ")
//    }else if(number >= 101 && number <= 200){
//     console.log(" 7 Rupee")
//    }else if(number >=201 && number <=300){
//     console.log("10 Rupee")
//    }else if( number >= 301){
//     console.log("12 Rupee")
//    }
// }
// handleSubmit()

// input -- 230
// output -- 1500

// 30* 10 -- 100*7 -- 100*5

const handleSubmit = () => {
  const number = Number(document.getElementById("prompt").value);
  if (!number) {
    console.log("No number");
  }
  let total = 0;
  if (number > 300) {
    total += (number - 300) * 12;
  }
  if (number > 200) {
    total += (number - 200) * 10;
  }
  if (number > 100) {
    total += (number - 100) * 7;
  }
  total += number * 5;
  console.log(total);
};
handleSubmit();
