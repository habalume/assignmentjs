//two buttons with arguments using inner text
function button1() {
	document.getElementById("answer").innerHTML = "I'm Right!";
}

function button2() {
	document.getElementById("answer").innerHTML = "No, I'm Right!";
}

 //using event listener
 function changeText(text) {
	var display = document.getElementById('display-text');
display.innerHTML = text;
 }

// //keypress
var header1 = document.getElementById("header1")

window.addEventListener('keypress',function(event)
{
	header1.innerHTML = "<h1>"+event.key+"<h1>"
});



