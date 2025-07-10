let arr = [10, 30, 666, 43, 53, 54, 56]

let max = Math.max(arr[0] , arr[1])
let sMin = Math.min(arr[0], arr[1])

for(let i = 2; i < arr.length ; i++){
    if(arr[i] > max){
        max = arr[i]
        sMin = arr[i]
    }
}


// console.log(sMin)
console.log(max)