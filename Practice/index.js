array = [53, 56, 6, 7, 8, 4, 3, 6, 7, 8, 4];


// duplicate 

let bucket = [];

for (let i = 0 ; i < array.length ; i++){
  if(!bucket.includes(array[i])){
    bucket.push(array[i])
  }
    
}
console.log(bucket)

// average 
let sum = 0
for(let i = 0 ; i < array.length; i++){
   sum += array[i]
}
// console.log(sum/array.length)


// even
let bag = [];
for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 == 0) {
    bag.push(array[i]);
  }
  //    console.log(bag)
}
// console.log("even", bag);
