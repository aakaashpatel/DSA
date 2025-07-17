let a = 39;
let isPrime = true;

if (a <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(a); i++) {
        if (a % i === 0) {
            isPrime = false;
            break; 
        }
    }
}

console.log(a + (isPrime ? " prime hai" : " prime nahi hai"));