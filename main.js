console.log("main.js loaded");

let saywhat = document.getElementById("output");

let listItems = document.getElementsByClassName("list-item");
// console.log("listItems", listItems);

function handleClick(MouseEvent){
	// console.log("MouseEvent", MouseEvent);
	let elementText = MouseEvent.target.innerHTML;
	saywhat.innerHTML = "hummmm, " + elementText + " you have clicked.";
}

// must use "listItems.item(i)" instead of "listItems.[i]" because it's an HTML collection and not array
for (let i = 0; i < listItems.length; i++){
	listItems.item(i).addEventListener("click", handleClick);
}

let header = document.getElementById("page-header");

header.addEventListener("mouseover", handleHeaderMouseOver);
header.addEventListener("mouseout", handleHeaderMouseOut);

function handleHeaderMouseOver(event){
	saywhat.innerHTML = "The force is strong with this one";
}

function handleHeaderMouseOut(event){
	saywhat.innerHTML = "Remember... the Force will be with you, always.";
}


let inputArea = document.getElementById("keypress-input");

inputArea.addEventListener("keyup", function(event){
	// console.log("event", event);
	saywhat.innerHTML = event.target.value;
});

let yodaImage = document.getElementById("theYoda");

document.getElementById("change-color")
	.addEventListener("click", function (){
		yodaImage.classList.toggle("flashy");
	});

document.getElementById("force-lots-of")
	.addEventListener("click", function(){
		yodaImage.classList.toggle("moreforce");
	});

document.getElementById("add-border")
	.addEventListener("click", function(){
		yodaImage.classList.toggle("bordered");
	});

// event bubbling

document.getElementById("wrapper").addEventListener("click", function(event){
	console.log("target", event.target);
	console.log("currentTarget", event.currentTarget);
	if(event.target.tagName.toLowerCase() === "li"){
		// console.log("You clicked on an <li> element");
	};

	if(event.target.className === "list-item"){
		// console.log("You clicked on a list-item");
	};

	if(event.target.id === "page-title"){
		// console.log("You clicked on the page-title element");
	};
});


let quotesArray = [
"A long time ago in a galaxy far, far away…",
"Use the force, Luke.",
"The force is strong with this one.",
"Do. Or do not. There is no try.",
"Fear is the path to the dark side.",
"Someday I will be the most powerful Jedi ever.",
"You were the chosen one!"
];

quotesArray.forEach(function(quote, index){
	let quoteBlock = `<div id="quote--${index}">
						<h3>"${quote}" -Star Wars</h3>
						</div>`

	let quoteDiv = document.createElement("div");
	quoteDiv.innerHTML = quoteBlock;
	document.getElementById("stickItHere").appendChild(quoteDiv);
	let quoteDom = document.getElementById(`quote--${index}`);
	quoteDom.addEventListener("click", () => {
		console.log("event", event);
		event.currentTarget.classList.toggle("accent");

	});

});

















