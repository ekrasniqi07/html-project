/* Functions for Toggle Menu on Mobile */

var navLinks = document.getElementById("navLinks");
var shopButton = document.getElementById("shopButton");

function showMenu(){
	navLinks.style.right = "0";
	shopButton.style.left = "10%";
}
function hideMenu(){
	navLinks.style.right = "-200px";
	shopButton.style.left = "25%";
}