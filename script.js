// console.log("hello World")

// console.log("hello World")

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



//get title working
//get cards flipping
// apis started


 // typing-demo array
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
