array = [53, 56, 6, 7,8 ,4, 3];

// even
let bag = [];
for(let i = 0 ; i < array.length; i++){
   if(array[i] % 2 == 0){
     bag.push(array[i])
   }
//    console.log(bag)
}
console.log(bag)