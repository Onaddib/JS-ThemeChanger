
let body = document.querySelector("body");

document.getElementById("button").onclick = function(){

if(document.getElementById("button").classList ==("bi bi-brightness-high-fill")){

    document.getElementById("button").classList =("bi bi-moon");
    body.style.background ="black";
    body.style.color = "white";
    body.style.transition = "1.5s";

  


}else if(document.getElementById("button").classList ==("bi bi-moon"))
{
    document.getElementById("button").classList =("bi bi-brightness-high-fill") 
    body.style.background ="white";
    body.style.color = "black";
    body.style.transition = "1.5s";

}




} 

    