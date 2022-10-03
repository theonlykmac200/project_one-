
// Project Cards 
//define the cards
const flipBoxInner = document.querySelector(".flip-box-front");
const flipBoxInner1 = document.querySelector(".flip-box-front1");
const flipBoxInner2 = document.querySelector(".flip-box-front2");
const flipBoxInner3 = document.querySelector(".flip-box-front3");

// when someone hovers over the card flip to the back, when they move off of it, change it back to the title
flipBoxInner.addEventListener('mouseover', function() {
  //change text to backside of the card
    flipBoxInner.textContent = "A fun game featuring prompts and alerts.  Built in a single object & features Ryan Gossling; who provides postive affermations as players guesses the secret number";   

});
flipBoxInner.addEventListener('mouseleave', function() {
  //change back to the front
    flipBoxInner.textContent = 'Hey Girl! Guess My Number!';
    }
);

flipBoxInner1.addEventListener('mouseover', function() {
   //change text to backside of the card
    flipBoxInner1.textContent = "Showcasing the work with OpenWeather's Api this program tells the end-user what the weather is like for a particular named city";
    }
);
flipBoxInner1.addEventListener('mouseleave', function() {
 //change back to the front
    flipBoxInner1.textContent = "How should I complain about the weather?";
    }
);

flipBoxInner2.addEventListener('mouseover', function() {
  //change text to backside of the card
    flipBoxInner2.textContent = "Inspired by the classic children's game memory. Showcases work with Javascript and Randomization";
    }
);
flipBoxInner2.addEventListener('mouseleave', function() {
   //change back to the front
    flipBoxInner2.textContent = "Programmers Memory Game";
    }
);

flipBoxInner3.addEventListener('mouseover', function() {
//change text to backside of the card
    flipBoxInner3.textContent = "A surefire way to make you smile, this project worked with connecting APIs and sound controls";
    }
);
flipBoxInner3.addEventListener('mouseleave', function() {
//change back to the front
    flipBoxInner3.textContent = "Joke Teller";
    }
);


// if I have time come back and put in a loop to change out the box contents vs four difference event listeners

const todayQuote = document.getElementById("quote-today");
const whoSaidIt = document.getElementById("author");
const refreshBtn = document.getElementById("getNew");



const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '760246b516mshaa445d297180d5ap13fc35jsn8abf7cfb6088',
		'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
	}
};

fetch('https://quotes15.p.rapidapi.com/quotes/random/', options)
	.then(response => response.json())
	.then((response) => {
        console.log(response)
        // todayQuote.innerText = response.originator[1].name
        todayQuote.innerText = "Quote of the Day: " + response.content
        whoSaidIt.innerText = "---" + response.originator.name
       

    })
        


	.catch(err => console.error(err));

    // function onSubmit(e) {
    //     e.preventDefault();

    //     const name =document.getElementById("name");
    //     const lName = document.getElementById("lnane");
    //     const email = document.getElementById("email");
    //     const phone = document.getElementById("phone");
    //     const mssg = document.getElementById("message-box")
    //     const submitBtn =document.getElementById("submit");

    //     name.innerText = "";
    //     lName.innerText = "";
    //     email.innerText = "";
    //     phone.innerText = "";
    //     mssg.innerText = "";

    // }

    document.addEventListener("submit", function(event) {
        // event.preventDefault()

        event.target.reset()

    })