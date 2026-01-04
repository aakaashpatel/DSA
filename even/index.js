const handleSubmit = () => {
    const number = document.getElementById("prompt").value;
    if(number % 2 === 0){
        console.log("even")
    }else{
        console.log("odd")
    }
};
