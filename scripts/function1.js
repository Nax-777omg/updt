
function redirect() {
var input = document.getElementById("inputField").value;




//perfume codigo "ejemplo"

if (input === "ejemplo") {
    
window.location.href = "perfumes/00.html";
return false;

} 



    












else {

document.getElementById("message").innerHTML = "El codigo de perfume " + " \" " + input + " \" " + " no esta registrado";
return false;

}
    
    
}