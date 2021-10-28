// Get the modal
var modal = document.getElementById('myModal');
var modal1 = document.getElementById('myModal1');
var modal2 = document.getElementById('myModal2');
var modal3 = document.getElementById('myModal3');
var modal4 = document.getElementById('myModal4');

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
var img11 = document.getElementById('myImg11');
var img12 = document.getElementById('myImg12');
var img13 = document.getElementById('myImg13');
var img14 = document.getElementById('myImg14');

var modalImg = document.getElementById("img01");
var modalImg1 = document.getElementById("img02");
var modalImg2 = document.getElementById("img03");
var modalImg3 = document.getElementById("img04");
var modalImg4 = document.getElementById("img05");
var captionText = document.getElementById("caption");

img1.onclick = function(){
  modal.style.display = "block";
  modalImg.src = "../img/Scholastics/First Year Transcript 2020101121.jpg";
  captionText.innerHTML = this.alt;
}

img2.onclick = function(){
  modal1.style.display = "block";
  modalImg1.src = "../img/Scholastics/Latest Schalostic Tests Scores.jpg";
  captionText.innerHTML = this.alt;
}

img3.onclick = function(){
  modal.style.display = "block";
  modalImg.src = "../img/Scholastics/CBSE Grade-12.jpg";
  captionText.innerHTML = this.alt;
}

img4.onclick = function(){
  modal.style.display = "block";
  modalImg.src = "../img/Scholastics/CBSE Grade-11.jpg";
  captionText.innerHTML = this.alt;
}

img5.onclick = function(){
  modal4.style.display = "block";
  modalImg4.src = "../img/Scholastics/CBSE Grade-10.jpg";
  captionText.innerHTML = this.alt;
}

img6.onclick = function(){
  modal.style.display = "block";
  modalImg.src = "../img/Scholastics/CBSE Grade-9.jpg";
  captionText.innerHTML = this.alt;
}

img7.onclick = function(){
  modal3.style.display = "block";
  modalImg3.src = "../img/Scholastics/CBSE Grade-8.jpg";
  captionText.innerHTML = this.alt;
}

img8.onclick = function(){
  modal3.style.display = "block";
  modalImg3.src = "../img/Scholastics/CBSE Grade-7.jpg";
  captionText.innerHTML = this.alt;
}

img9.onclick = function(){
  modal4.style.display = "block";
  modalImg4.src = "../img/Scholastics/CBSE Grade-6.jpg";
  captionText.innerHTML = this.alt;
}

img10.onclick = function(){
  modal4.style.display = "block";
  modalImg4.src = "../img/Scholastics/CBSE Grade-5.jpg";
  captionText.innerHTML = this.alt;
}

img11.onclick = function(){
  modal4.style.display = "block";
  modalImg4.src = "../img/Scholastics/CBSE Grade-4.jpg";
  captionText.innerHTML = this.alt;
}

img12.onclick = function(){
  modal1.style.display = "block";
  modalImg1.src = "../img/Scholastics/CBSE Grade-3.jpg";
  captionText.innerHTML = this.alt;
}

img13.onclick = function(){
  modal.style.display = "block";
  modalImg.src = "../img/Scholastics/CBSE Grade-2.jpg";
  captionText.innerHTML = this.alt;
}

img14.onclick = function(){
  modal.style.display = "block";
  modalImg.src = "../img/Scholastics/CBSE Grade-1.jpg";
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
  modal1.style.display = "none";
  modal2.style.display = "none";
  modal3.style.display = "none";
  modal4.style.display = "none";
}