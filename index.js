// select the drum class and get the length
const numberOfDrumButtons = document.querySelectorAll(".drum").length;

// iterate through the classes
// select the drum based on the index value
// listen to the click and fire the anonymous function corresponding to the index value

for (let i = 0; i < numberOfDrumButtons;i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",function () {

    // creating innerHTML object to switch through different cases
    // i.e., if i = 1, innerHTML will be 'w'
        var buttonInnerHTML = this.innerHTML;
    
    // call the function by using the innerHTML we captured
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
        
    });

    // each time we loop through and get the ButtonInnerHTML. Pass it to the anonymous function
    // That anonymous function invokes the makeSound function
    // we use buttonInnerHTML.key property to pass a value to it
    document.addEventListener("keypress", function (buttonInnerHTML){
        // buttonInnerHTML.key value changes to which ever value we passed
        // i.e, if buttonInnerHTML is 'w' => The value will be w.key
        // .key is a property to make a click
        makeSound(buttonInnerHTML.key);
        buttonAnimation(buttonInnerHTML.key);
    });
}

// creating makesound property which takes 'key' parameter
// key parameter we get it from the for loop above

function makeSound (key) {
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
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "k":
            let kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        
        case "l":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        default:
            console.log(innerHTML);
            break;
    }
}

// function to add 'pressed' class to change the background when clicked
function buttonAnimation (buttonClicked) {
    document.querySelector("." + buttonClicked).classList.add("pressed")

    // set timeout to remove the class so that it appears to be unpressed
    setTimeout(function () {
        document.querySelector("." + buttonClicked).classList.remove("pressed")
    }, 100);
}