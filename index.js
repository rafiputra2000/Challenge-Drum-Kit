
let numberOfDrumButtons = document.querySelectorAll(".drum").length;
// function Audio(fileLocation){
//     this.fileLocation = fileLocation;
//     this.play = function () {

//     }
// }

for(let i = 0; i < numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", 
function(){
    let buttonOfInnerHTML = this.innerHTML;
    makeSound(buttonOfInnerHTML);
    buttonOfAnimation(buttonOfInnerHTML);

});
}

document.addEventListener("keydown", function(KeyboardEvent){
    makeSound(KeyboardEvent.key);
    buttonOfAnimation(KeyboardEvent.key);
    // makeSound(KeyboardEvent);


});

function makeSound(key){
    switch (key) {

        case "w":
            
        let tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
            break;

        case "a":
            
        let tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
            break;

        case "s":
            
        let tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();               
            break;
        
        case "d":
            
        let tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
            break;

        case "j":
            
        let snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;

        case "k":
            
        let crash = new Audio("sounds/crash.mp3");
        crash.play();
            break;

        
        case "l":
            
        let kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
            break;
                            
    
        default:console.log(key);
            break;     
    }

}

function buttonOfAnimation (currentKey){
    let changeClassList = document.querySelector("." + currentKey);
    changeClassList.classList.add("pressed");
    setTimeout(function(){
        changeClassList.classList.remove("pressed");
    }, 200);
}

// document.addEventListener("keydown", respondToKey(event));

// function respondToKey(event){
//     console.log("key pressed");

// }

// function anotherAddEventListener(typeOfEvent, callback) {
//     //Detect Event code..

//     var eventThatHappened = {
//         eventType : "keypress",
//         key : "p",
//         durationOfKeyPress : 2

//     }

//     if(eventThatHappened.eventType === typeOfEvent){
//         callback(eventThatHappened);
//     }
// }

// anotherAddEventListener("keypress", function(event){
//     console.log(event);
// });


