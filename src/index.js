import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import GifApiCall from './js/giphy.js';

// Business Logic

async function getGif(fish) {
  const response = await GifApiCall.getGif(fish);
  if (response.main) {
    printElements(response, fish);
  } else {
    printError(response, fish);
  }
}

// UI Logic
//devtools URL
// https://api.giphy.com/v1/gifs/search?api_key=7XyvDq4E7kk1NMLYWtiA5xOka37t4zHdq=a&limit=25&offset=0&rating=g&lang=en
// https://api.giphy.com/v1/gifs/search?api_key=7XyvDq4E7kk1NMLYWtiA5xOka37t4zHd&q=a&limit=25&offset=0&rating=g&lang=en
function printElements(fish) {
  document.querySelector('#where-the-api-info-goes').setAttribute("imgblahrc", "jsonifiedResponse.data.url");
  document.querySelector('#where-the-api-info-goes').innerText =`${fish}`; 
  //  a.setAttribute("href", fish["images"]["url"]);

}

function printError() {
  //console.log("hi")
}

function userInputForm(event) {
  event.preventDefault();
  let fish = document.querySelector('#user-input').value;
  document.querySelector('#user-input').value = null;
  getGif(fish);
  printElements(fish);
}

window.addEventListener("load", function() {
  document.querySelector("#user-input-form").addEventListener("submit", userInputForm);
});