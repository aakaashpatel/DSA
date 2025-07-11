const number = Number(prompt("Enter your number"));

if(isNaN(number)){
    console.log("invalid input")
}else if(number < 0){
    console.log("number should be +ve")
}else{
     let sum = 0;
     for (let i = 0; i <= number ; i++){
        sum = sum + i;
     }
     console.log(sum)
}

// console.log(number)