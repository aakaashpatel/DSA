let pr = prompt("Enter you number ");

let n = Number(pr)

if(isNaN(n)){
  console.log("Enter Number");
}else{
  if(n > 0){
    console.log("you number is valid and bigger than 0") //true
  }else{
    console.log("smaller than 0") //false
  }
}