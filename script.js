// document.getElementById("driver").onclick = function(){
//     prompt ('Enter your name')
// }
let btn = document.getElementById("driver");
let register = document.getElementById("register")

btn.addEventListener("click", () =>{
    if(register.style.display === "none"){
        register.style.display = "block";
    }else 
    {
        register.style.display = "none";
    }
})