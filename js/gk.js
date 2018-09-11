function about() {
  var x = document.getElementById("about");
  if (x.style.display === "none") {
    x.style.display = "block";
  }
  else {
    x.style.display = "none";
  }
}

function gallery() {
  var x = document.getElementById("gallerylist");
  if (x.style.display === "none") {
    x.style.display = "block";
  }
  else {
    x.style.display = "none";
  }
}

// collapsible navbar
function hamburger() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className ="topnav"
	}
}

function hamburgerGrad() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav-gradient") {
		x.className += " responsive";
	} else {
		x.className ="topnav-gradient"
	}
}


function randombg(){
  var random = Math.floor(Math.random() * 10) + 0;
  var bigSize = ["url('img/bg/splash1.jpg')",
                 "url('img/bg/splash2.jpg')",
                 "url('img/bg/splash3.jpg')",
                 "url('img/bg/splash4.jpg')",
                 "url('img/bg/splash5.jpg')",
                 "url('img/bg/splash6.jpg')",
                 "url('img/bg/splash7.jpg')",
                 "url('img/bg/splash8.jpg')",
                 "url('img/bg/splash9.jpg')",
                 "url('img/bg/splash10.jpg')"];
  document.getElementById("bg").style.backgroundImage=bigSize[random];
}

// function navbar(){
// 		if (document.location.href === 'stuff.html' || 'index.html') {

// 		}
// }