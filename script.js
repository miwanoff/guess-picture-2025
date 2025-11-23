window.onload = init;

function init() {
  let images = document.querySelectorAll("img.picture");
  for (let i = 0; i < images.length; i++) {
    images[i].onclick = showAnswer;
  }
}

function showAnswer(event) {
  //   let image = document.getElementById("one");
  let image = event.target;
//   image.src = "images/one.jpg";
  let name = image.id;
  console.log(name+"blur");
  image.src = "images/one.jpg";
}
