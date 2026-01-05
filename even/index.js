const handleSubmit = () => {
    const number = document.getElementById("prompt").value;
    if(number % 2 === 0){
        console.log("even")
    }else{
        console.log("odd")
    }
};

// const handleSubmit = () =>{
//     const number = document.getElementById("prompt").value;

//     for(let i = 0; i<=number; i++){
//         if(i % 2 === 0 ){
//             console.log( i ,"even")
//         }else{
//             console.log("odd")
//         }
//     }
// }
