let arr = [34,674,78,5332,6];
let max = arr[0]

for(let i = 0 ; i < arr.length; i++){
    if(max < arr[i]){
        max = arr[i]
    }
    //min
    // if(max > arr[i]){
    //     max = arr[i]
    // }
}

console.log(max)