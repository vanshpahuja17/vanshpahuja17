// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img1 = document.getElementById('myImg');
var img2 = document.getElementById('myImg2');
var img3 = document.getElementById('myImg3');
var img4 = document.getElementById('myImg4');
var img5 = document.getElementById('myImg5');
var img6 = document.getElementById('myImg6');
var img7 = document.getElementById('myImg7');
var img8 = document.getElementById('myImg8');
var img9 = document.getElementById('myImg9');
var img10 = document.getElementById('myImg10');

var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

img1.onclick = function(){
  modal.style.display = "block";
  modalImg.src = "../img/Specializations/1)DSA Specializations.jpg";
  captionText.innerHTML = this.alt;
}

img2.onclick = function(){
  modal.style.display = "block";
  modalImg.src = "../img/Specializations/2.2 Networking.jpg";
  captionText.innerHTML = this.alt;
}

img3.onclick = function(){
  modal.style.display = "block";
  modalImg.src = "../img/Specializations/3)Cloud Development Specializations.jpg";
  captionText.innerHTML = this.alt;
}

img4.onclick = function(){
  modal.style.display = "block";
  modalImg.src = "../img/Specializations/4)Blockchain Specializations.jpg";
  captionText.innerHTML = this.alt;
}

img5.onclick = function(){
  modal.style.display = "block";
  modalImg.src = "../img/Specializations/5)AI (ML&DL) and Data Science Specializations.jpg";
  captionText.innerHTML = this.alt;
}

img6.onclick = function(){
  modal.style.display = "block";
  modalImg.src = "../img/Specializations/6)Web Development Specializations.jpg";
  captionText.innerHTML = this.alt;
}

img7.onclick = function(){
  modal.style.display = "block";
  modalImg.src = "../img/Specializations/7)Java Specialization.jpg";
  captionText.innerHTML = this.alt;
}

img8.onclick = function(){
  modal.style.display = "block";
  modalImg.src = "../img/Specializations/8)C Specialization.jpg";
  captionText.innerHTML = this.alt;
}

img9.onclick = function(){
  modal.style.display = "block";
  modalImg.src = "../img/Specializations/9)Python Specialization.jpg";
  captionText.innerHTML = this.alt;
}

img10.onclick = function(){
  modal.style.display = "block";
  modalImg.src = "../img/Specializations/2.1 IT Automation.jpg";
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}