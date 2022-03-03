var arr=document.querySelectorAll(".drum");
for(var i=0;i<arr.length;i++) {
 
      document.querySelectorAll(".drum")[i].addEventListener("click",function(){
          var exp=this.innerHTML;
          makeSound(this.innerHTML);
          makeFlash(this.innerHTML);
      });
    }
document.addEventListener("keypress",function(event){
     makeSound(event.key);
     makeFlash(event.key);
});
function makeFlash(key){
   document.querySelector("."+key).classList.add("pressed");

   setTimeout(function(){
       document.querySelector("."+key).classList.remove("pressed");

   },200);
}

function makeSound(kk) {
    switch (kk) {
        case "w":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var kick=new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "k":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;      
        case "l":      
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;
        default:
            break;
    }
}