import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import GifApiCall from './js/giphy.js';

// Business Logic

async function getGif(fish) {
  const response = await GifApiCall.getGif(fish);
  console.log(response)
  if (response.data) {
    printElements(response, fish);
  } else {
    printError(response, fish);
  }
}

// UI Logic

function printElements(fish) {
  const img = document.createElement('img');
  img.setAttribute('src', fish.data[0].images.original.url)
  document.querySelector('#where-the-api-info-goes').append(img);
}

// function printElements(fish) {
//   let fishy = fish.data[0].images.downsized.url;//embed_url;//.images.looping.mp4; 
//   // let p = document.querySelector("#where-the-api-info-goes");
//   // let a = document.createAttribute("a", fishy); 


//   document.querySelector('#where-the-api-info-goes').innerText = `${fishy}`;

//   // p.append(a);
  
//   console.log("fish: ", fish);
 
//   console.log("fishy: ", fishy);
// }

function printError() {
  //console.log("hi")
}

function userInputForm(event) {
  event.preventDefault();
  let fish = document.querySelector('#user-input').value;
  document.querySelector('#user-input').value = null;
  // getGif(fish);
  getGif(fish);
  printElements(fish);
}

window.addEventListener("load", function() {
  document.querySelector("#user-input-form").addEventListener("submit", userInputForm);
});