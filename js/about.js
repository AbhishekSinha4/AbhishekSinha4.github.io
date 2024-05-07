document.querySelector(".cities .box").addEventListener("scroll",function(){
	console.log("hi")
	walk()
	chooseText()
})
// document.querySelector(".cities .box").addEventListener("scrollend",function(){
// 	console.log("hello")
// 	stop()
// })

var lastVisible = "#about-section-1"

function walk(){
	document.querySelector(".sprite").classList.add("walk-sprite")
	document.querySelector(".total-road").classList.add("walk-road")
}
function stop(){
	document.querySelector(".sprite").classList.remove("walk-sprite")
	document.querySelector(".total-road").classList.remove("walk-road")
}
function chooseText(){
	var scroll = document.querySelector(".cities .box").scrollTop
	//height of list item
	imgHeight = document.querySelector(".cities .box ul li.city-image").offsetHeight
	bufferHeight = document.querySelector(".cities .box ul li.buffer").offsetHeight
	itemHeight = imgHeight + bufferHeight
	//amount scrolled through the city+buffer below it 
	itemScroll = scroll % (imgHeight+bufferHeight)
	//if in 2nd half of buffer, next image, else previous image
	if(itemScroll>(imgHeight+(0.5*bufferHeight))){
		img = Math.ceil(scroll/(itemHeight))+1
	} else{
		img = Math.floor(scroll/(itemHeight))+1
	}


	nowVisible = "#about-section-"+img
	if(lastVisible !== nowVisible){
		document.querySelector(lastVisible).classList.remove("visible")
		document.querySelector(nowVisible).classList.add("visible")
		lastVisible = nowVisible
	}


	//if in buffer, dynamic opacity such that 0 at middle of buffer and 1 at ends
	if(itemScroll>(imgHeight)){
		bufferScroll = itemScroll-imgHeight
		//opacity change linear effect using absolute value
		// fades in and out fast if using exponents - increase or decrease exponent to affect speed of change
		// opacityValue = Math.abs(Math.floor(bufferHeight/2) - bufferScroll)/Math.floor(bufferHeight/2)
		opacityValue = (Math.floor(bufferHeight/2) - bufferScroll)**4/Math.floor(bufferHeight/2)**4
		document.querySelector(".visible").style.opacity = opacityValue
	} else{
		document.querySelector(".visible").style.opacity = 1
	}	
}

var isScrolling;
window.addEventListener("mousewheel",function(e){
	console.log(e.deltaY)
	document.querySelector(".cities .box").scrollTop += e.deltaY
	window.clearTimeout( isScrolling );
	isScrolling = setTimeout(function() {

		// Run the callback
		stop()
		console.log( 'Scrolling has stopped.' );

	}, 66);
	// walk()
})