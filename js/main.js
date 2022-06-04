tabs = document.querySelectorAll(".tab");
pages = document.querySelectorAll(".page");

for(var i=0;i<tabs.length;i++){
	tabs[i].addEventListener("click",function(){
		console.log();
		for(var i=0;i<pages.length;i++){
			pages[i].classList.remove("active");
		}
		for(var i=0;i<tabs.length;i++){
			tabs[i].classList.remove("active");
		}
		document.querySelector("#page-"+this.id.split("-")[1]).classList.add("active")
		this.classList.add("active")
	})
}

window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.querySelector("nav");

// Get the offset position of the navbar
var sticky = navbar.getBoundingClientRect().top;
console.log(sticky)

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
	console.log(sticky+"\n"+ window.pageYOffset)
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}