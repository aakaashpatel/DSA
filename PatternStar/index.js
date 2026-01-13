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

// pattern = ""
// pattern = "" + "*"
// console.log(pattern)
// console.log("*")
// console.log("**")
// console.log("***")
// console.log("****")