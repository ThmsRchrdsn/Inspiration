let quote = document.querySelector("#quote");
let author = document.querySelector("#author");
const url = "http://quotable.io/random";

window.onload = fireEvent();

function fireEvent() {
  let windowDimensions = window.innerWidth + "x" + window.innerHeight;

  unsplashURL =
    "url(https://source.unsplash.com/" +
    windowDimensions +
    "/?minimal/?bright)";

  document.getElementById("container").style.backgroundImage = unsplashURL;

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      quote.innerText = '"' + data.content + '"';
      author.innerText = "-" + data.author;
    });
}
