var outputTarget = document.getElementById("output-target");

var sectionEl = document.getElementsByClassName("article-section")

function sectionClicked(MouseEvent){
	console.log("MouseEvent");
	var elementText = MouseEvent.target.innerHTML;
	outputTarget.innerHTML = "You clicked on the " + elementText;
}

for(var i = 0; i < sectionEl.length; i++){
	sectionEl.item(i).addEventListener("clicked", sectionClicked);
}

var header = document.getElementById("page-header");

function mouseOverHeader(event){
	outputTarget.innerHTML = "You moved your mouse over the header!";
}

function mouseOutHeader(event){
	outputTarget.innerHTML = "You left me!";
}

header.addEventListener("mouseover", mouseOverHeader);
header.addEventListener("mouseout", mouseOutHeader);

var outputField = document.getElementById("keypress-input");

outputField.addEventListener("keyup", function(event){
	console.log("event", event);
	outputTarget.innerHTML = event.target.value;
});

var guineaPig = document.getElementById("guinea-pig");

document.getElementById("add-color")
	.addEventListener("click", function(){
		guineaPig.classList.toggle("add-color");
	});

document.getElementById("make-large")
	.addEventListener("click", function(){
		guineaPig.classList.toggle("make-large");
	});

document.getElementById("add-border")
	.addEventListener("click", function(){
		guineaPig.classList.toggle("add-border");
	});

document.getElementById("add-rounding")
	.addEventListener("click", function(){
		guineaPig.classList.toggle("add-rounding");
	});