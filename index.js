var randomNumber1=Math.random();
randomNumber1=randomNumber1*6;
randomNumber1=Math.floor(randomNumber1)+1;
var dice= "dice" + randomNumber1 + ".png";
var storeDice= "images/" + dice;
var select=document.querySelectorAll("img")[0];
select.setAttribute("src",storeDice);

var randomNumber2=Math.random();
randomNumber2=randomNumber2*6;
randomNumber2=Math.floor(randomNumber2)+1;
var dice2= "dice" + randomNumber2 + ".png";
var storeDice2= "images/" + dice2;
document.querySelectorAll("img")[1].setAttribute("src",storeDice2);

if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML=("Player 1 Wins");
}
else if (randomNumber1<randomNumber2) {
    document.querySelector("h1").innerHTML=("Player 2 Wins");
}
else {
    document.querySelector("h1").innerHTML=("Match Draws");
}
