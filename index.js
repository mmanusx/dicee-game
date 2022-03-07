// https://www.w3schools.com/tags/att_script_src.asp
var randomNumber1 =Math.floor(Math.random()*6 +1);
document.querySelector(".img1").setAttribute("src",'/images/dice'+ randomNumber1 + '.png');

var randomNumber2 = Math.floor(Math.random()*6+1);
document.querySelector(".img2").setAttribute("src",'/images/dice'+ randomNumber2 + '.png' );
// alternatif olarak:: document.querySelectorAll("img")[1]set...;


var result = "Refresh Me";
if(randomNumber1 > randomNumber2){
    result = "Player 1 Wins!";
}else if(randomNumber2 > randomNumber1){
    result = "Player 2 Wins!";
}else{
    result = "Draw!"
}

document.querySelector("h1").innerHTML = result;