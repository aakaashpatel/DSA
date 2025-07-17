let a = 1 ;
let isPrime = true;

if( a <= 1){
    isPrime = false ; 
}else{
    for(let i=2; i <=  Math.floor(a/2); i++){
        if(a%i===0){
            console.log("prime hain")
        }else{
            console.log("prime nahi h ")
        }
    }
}