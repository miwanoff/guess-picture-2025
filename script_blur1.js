window.onload = init;

function init() {
  let images = document.querySelectorAll("img.picture");
  for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("mouseover", showAnswer);
    images[i].addEventListener("mouseout", blurAnswer);
  }
}

function showAnswer(event) {
  //   let image = document.getElementById("one");
  let image = event.target;
  let name = image.id;
  console.log(name);
  image.src = "images/" + name + ".jpg";
}
function blurAnswer(event) {
  //   let image = document.getElementById("one");
  let image = event.target;
  let name = image.id + "blur";
  console.log(name);
  image.src = "images/" + name + ".jpg";
}
