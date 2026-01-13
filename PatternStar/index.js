const handleSubmit = () =>{
    const num = document.getElementById("prompt").value;

    let pattern =""
    for(let i = 1 ; i <= num;i++){
        pattern +="*"
        console.log(pattern)
    }
}

// dry run 

// *
console.log("*")
console.log("**")
console.log("***")
console.log("****")