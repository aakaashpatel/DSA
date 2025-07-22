let pr = prompt("Enter the value")


let n = Number(pr)
if(isNaN(n)){
    console.log("enter tha value")
}else{
    if(n > 0 ){
        let sum = 0;
        while(n > 0){
            let digit = n%10 ;
            sum = sum + digit
            n = Math.floor(n/10)
        }
        console.log(sum)
    }
    console.log("Valid")
    console.log("Valid")
    console.log("Valid")
    console.log("Valid")
}