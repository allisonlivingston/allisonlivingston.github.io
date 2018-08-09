let welcome = document.querySelector('.home-nav')
let main = document.querySelector('.home-main')
let name = document.querySelector('.index-header')

name.addEventListener("click", function(event) {
  event.preventDefault()
  welcome.style.display = 'flex'
  main.style.height = '40vh'
  welcome.scrollIntoView({
  behavior: 'smooth'
  })
})

var modal = document.getElementById('myModal')

var img = document.getElementById('myImg')
var modalImg = document.getElementById("img01")
var captionText = document.getElementById("caption")
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = Resume-Allison-Livingston.png;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none"
}
