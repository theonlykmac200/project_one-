
// const bannerChange = {
//     curretHeadline: 0,
//     headlines: [ "I am a Web Developer", "I am a Chief Product Officer", "I am a Tech Executive", "I am a Leader", "I am a Founder"],
//     headline: function() {
//         document.getElementByID("headline").innerText = this.headlines[this.curretHeadline];
//         if (this.curretHeadline === this.headline.length - 1) {
//             this.curretHeadline = 0;
//         }else {
//             this.curretHeadline = this.curretHeadline + 1;
//         }
//     }
    
// };
// setInterval(function() {
//     bannerChange.headline();
// }, 5000)
// // call the funtion and move inside might help look up how to call the function on pageload 
// console.log("currentHeadline")

// apis started


//  typing-demo array
 let typing_demo = ["I am a Web Developer", "I am a Chief Product Officer", "I am a Tech Executive", "I am a Leader"];
// on window load, append the typed text to typing-demo class
window.onload = function () {
 let i = 0;
 let timer = setInterval(function () {
     document.getElementById("typing-demo").innerHTML = typing_demo[i];
     i++;
     if (i == typing_demo.length) {
         i = 0;
     }
 }, 3000);
}

// flipping cards 
//define the cards
const project_card = document.getElementsByClassName("flip-box-inner") 
//variable for the front of the card
let front_card = document.getElementsByClassName("flip-box-front")
// variable for the back of the card 
let back_card = document.getElementsByClassName("flip-box-back")

const flipBoxInner = document.querySelector(".flip-box-front")
const flipBoxInner1 = document.querySelector(".flip-box-front1")
const flipBoxInner2 = document.querySelector(".flip-box-front2")
const flipBoxInner3 = document.querySelector(".flip-box-front3")

flipBoxInner.addEventListener('mouseover', function() {
    // change the text to "Click to flip"
    flipBoxInner.textContent = 'A fun game featuring prompts and alerts.  Build in a single object & features Ryan Gossling; who provides postive affermations as players guesses the secret number';
    }
);
flipBoxInner.addEventListener('mouseleave', function() {
    // change the text back to "Hover over me"
    flipBoxInner.textContent = 'Hey Girl! Guess My Number!';
    }
);

flipBoxInner1.addEventListener('mouseover', function() {
    // change the text to "Click to flip"
    flipBoxInner1.textContent = "Showcaseing the work with OpenWeather's Api this program tells the end-user what the weather is like for a particular named city";
    }
);
flipBoxInner1.addEventListener('mouseleave', function() {
    // change the text back to "Hover over me"
    flipBoxInner1.textContent = "What's the weather like?";
    }
);

flipBoxInner2.addEventListener('mouseover', function() {
    // change the text to "Click to flip"
    flipBoxInner2.textContent = "Inspired by the classic children's game memory. Showcases work with Javascript and Randomization";
    }
);
flipBoxInner2.addEventListener('mouseleave', function() {
    // change the text back to "Hover over me"
    flipBoxInner2.textContent = "Programmers Memory Game";
    }
);

flipBoxInner3.addEventListener('mouseover', function() {
    // change the text to "Click to flip"
    flipBoxInner3.textContent = "A surefire way to make you smile, this project worked with connecting APIs and sound controls";
    }
);
flipBoxInner3.addEventListener('mouseleave', function() {
    // change the text back to "Hover over me"
    flipBoxInner3.textContent = "Joke Teller";
    }
);


// // when someone hovers the card 
// project_card.addEventListener("click", flipCard); 

// function flipCard() {
//    document.getElementById.("flip-box-back") =

// }

