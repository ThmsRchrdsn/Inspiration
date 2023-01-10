let quote = document.querySelector("#quote");
let author = document.querySelector("#author");
let fonts = ["Ms Madi", "Satisfy", "Pacifico", "Great Vibes", "Sacramento", "Tangerine", "Alex Brush"]
const url = "https://quotable.io/random";

window.onload = fireEvent();

function fireEvent() {
  let windowDimensions = window.innerWidth + "x" + window.innerHeight;
  // unsplashURL =
  //   "url(https://source.unsplash.com/" +
  //   windowDimensions +
  //   "/?minimal/?white)";

  unsplashURL = "url(https://source.unsplash.com/random/?minimal)";
  document.getElementById("container").style.backgroundImage = unsplashURL;

  let font = fonts[Math.floor(Math.random() * fonts.length)];
  document.getElementById("quote").style.fontFamily = font;
  document.getElementById("author").style.fontFamily = font;

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      quote.innerText = '"' + data.content + '"';
      author.innerText = "-" + data.author;
    });
}
