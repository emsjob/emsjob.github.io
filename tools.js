
// Smooth scroll down on click
function smoothScroll(target, duration) {
	var target = document.querySelector(target);
	var targetPosition = target.getBoundingClientRect();
	var startPosition = window.pageYOffset;
	var distance = targetPosition - startPosition;
	var startTime = null;

	function animation(currentTime) {
		if (startTime == null) startTime = currentTime;
		var timeElapsed = currentTime - startTime;
		var run = ease(timeElapsed, startPosition, distance, duration);
		window.scrollTo(0, run);
		if (timeElapsed < duration) requestAnimationFrame(animation);
	}

	function ease(t, b, c, d) {
		t /= d/ 2 ;
		if (t < 1) return c/  2 * t * t + b;
		t--;
		return -c / 2 * (t * (t - 2) - 1) + b;
	}

	requestAnimationFrame(animation);
}


var section20 = document.querySelector(".section19");
section20.addEventListener("click", function() {
	smoothScroll("section19", 1000);
});

var section19 = document.querySelector(".section19");
section19.addEventListener("click", function() {
	smoothScroll("section19", 1000);
});

var section18 = document.querySelector(".section19");
section18.addEventListener("click", function() {
	smoothScroll("section19", 1000);
});


// Back to top button
myButton = document.getElementById("btn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
		myButton.style.display = "block";
	} else {
		myButton.style.display = "none";
	}
}

function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}


// Expand post button
function myFunction() {
	var dots = document.getElementById("dots");
	var more = document.getElementById("more");
	var btn = document.getElementById("btn-2");

	if (dots.style.display === "none") {
		dots.style.display = "inline"
		btnText.innerHTML = "View more";
		more.style.display = "none";
	} else {
		dots.style.display = "none"
		btnText.innerHTML = "View less";
		more.style.display = "block";
	}
}