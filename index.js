// Detecting button press. 
var numberOfDrums=document.querySelectorAll(".drum").length;
for(var i=0; i<numberOfDrums; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        var buttonInnerHTML=this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
        //console.log(this.innerHTML);
        //this.style.color="yellow"; 
        //var audio=new Audio("sounds/tom-1.mp3");
        //audio.play();
    }); 
}  
// Detecting keyboard press.
document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
    
});
// Playing the sound.
function makeSound(key){
    switch (key) {
        case "a":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "s":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "d": 
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "f":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick=new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        default:
            console.log("wrong key is pressed");
            break;
    }
}
function buttonAnimation(currentKey){
    var activeButton= document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    },150);
}
// higher order functions
/*function add(num1, num2){
    return num1 + num2;
}
function subtract(num1, num2){
    return num1 - num2;
}
function multiply(num1, num2){
    return num1 * num2;
}
function divide(num1, num2){
    return num1 / num2;
}
function calculator(num1, num2, operator){
    return operator(num1, num2);
} */