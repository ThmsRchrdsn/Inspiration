let quote = document.querySelector("#quote");
const api_url = "https://zenquotes.io/api/quotes/";

window.onload = fireEvent();

function fireEvent() {
  let windowDimensions = window.innerWidth + "x" + window.innerHeight;

  unsplashURL =
    "url(https://source.unsplash.com/" +
    windowDimensions +
    "/?landscape/?bright)";

  document.getElementById("container").style.backgroundImage = unsplashURL;
}
