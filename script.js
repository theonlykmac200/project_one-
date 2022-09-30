console.log("hello World")

console.log("hello World")

const bannerChange = {
    curretHeadline: 0,
    headlines: [ "I am a Web Developer", "I am a Chief Product Officer", "I am a Tech Executive", "I am a Leader", "I am a Founder"],
    headline: function() {
        document.getElementByID("headline").innerHTML = this.headlines[this.curretHeadline];
        if (this.curretHeadline === this.headline.length - 1) {
            this.curretHeadline = 0;
        }else {
            this.curretHeadline = this.curretHeadline + 1;
        }
    }
    
};
setInterval(function() {
    bannerChange.headline();
}, 5000)

console.log("currentHeadline")

//get title working
//get cards flipping
// apis started


