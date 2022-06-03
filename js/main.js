tabs = document.querySelectorAll(".tab");
pages = document.querySelectorAll(".page");

for(var i=0;i<tabs.length;i++){
	tabs[i].addEventListener("click",function(){
		console.log();
		for(var i=0;i<pages.length;i++){
			pages[i].classList.remove("active");
		}
		document.querySelector("#page-"+this.id.split("-")[1]).classList.add("active")
	})
}