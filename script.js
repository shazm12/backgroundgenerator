var css=document.querySelector("h2");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById("gradient");
function changegradient() {
	body.style.background="linear-gradient(to right,"+ color1.value +" , "+ color2.value + ")";

	css.textContent = body.style.background + " ; ";

}
color1.addEventListener("input",changegradient);

color2.addEventListener("input",changegradient);