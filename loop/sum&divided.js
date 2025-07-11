const number = Number(prompt("Enter your number"));

if(isNaN(number)){
    console.log("invalid input")
}else if(number < 0){
    console.log("number should be +ve")
}else{
    console.log("valid number")
}

// console.log(number)