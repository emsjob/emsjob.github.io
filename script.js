// MODAL 1
// Get the modal
const modal1 = document.getElementById("myModal1");

// Get the image and insert it inside the modal - use its "alt" text as a caption
const img1 = document.getElementById("lights5");
const modalImg1 = document.getElementById("img01");
img1.onclick = function() {
  modal1.style.display = "block";
  modalImg1.src = this.src;
}

// Get the <span> element that closes the modal
const span1 = document.getElementsByClassName("close1")[0];

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";
}
// -----

// MODAL 2
// Get the modal
const modal2 = document.getElementById("myModal2");

// Get the image and insert it inside the modal - use its "alt" text as a caption
const img2 = document.getElementById("lights4");
const modalImg2 = document.getElementById("img02");
img2.onclick = function() {
  modal2.style.display = "block";
  modalImg2.src = this.src;
}

// Get the <span> element that closes the modal
const span2 = document.getElementsByClassName("close2")[0];

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
  modal2.style.display = "none";
}
// -----

// MODAL 3
// Get the modal
const modal3 = document.getElementById("myModal3");

// Get the image and insert it inside the modal - use its "alt" text as a caption
const img3 = document.getElementById("lights3");
const modalImg3 = document.getElementById("img03");
img3.onclick = function() {
  modal3.style.display = "block";
  modalImg3.src = this.src;
}

// Get the <span> element that closes the modal
const span3 = document.getElementsByClassName("close3")[0];

// When the user clicks on <span> (x), close the modal
span3.onclick = function() {
  modal3.style.display = "none";
}
// -----

// MODAL 4
// Get the modal
const modal4 = document.getElementById("myModal4");

// Get the image and insert it inside the modal - use its "alt" text as a caption
const img4 = document.getElementById("lights2");
const modalImg4 = document.getElementById("img04");
img4.onclick = function() {
  modal4.style.display = "block";
  modalImg4.src = this.src;
}

// Get the <span> element that closes the modal
const span4 = document.getElementsByClassName("close4")[0];

// When the user clicks on <span> (x), close the modal
span4.onclick = function() {
  modal4.style.display = "none";
}
// -----

// MODAL 5
// Get the modal
const modal5 = document.getElementById("myModal5");

// Get the image and insert it inside the modal - use its "alt" text as a caption
const img5 = document.getElementById("lights1");
const modalImg5 = document.getElementById("img05");
img5.onclick = function() {
  modal5.style.display = "block";
  modalImg5.src = this.src;
}

// Get the <span> element that closes the modal
const span5 = document.getElementsByClassName("close5")[0];

// When the user clicks on <span> (x), close the modal
span5.onclick = function() {
  modal5.style.display = "none";
}
// -----

function goBack() {
    window.history.back();
}