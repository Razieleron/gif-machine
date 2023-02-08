import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

function userInputForm(event) {
  event.preventDefault();
  const userInput = document.querySelector('#user-input').value;
  document.querySelector('#user-input').value = null;
  rememberToCallFunctionsYouDefineOutsideThisHandler()
  /* this is where the api thing goes maybe?  we can use the 'userinput' variable to adjust the api query (like after the ?) 
    https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}q=${userInput}&limit=25&offset=0&rating=g&lang=en
  */
}
window.addEventListener("load", function() {
  document.querySelector("#user-input-form").addEventListener("submit", userInputForm);
});

/* ummm, below is what needs to be discovered muahahaha*/
export default class GifApiCall {  
  static async getGif(fish) {
    try {
      const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}q=${userInput}&limit=25&offset=0&rating=g&lang=en`);
      const jsonifiedResponse = await response.json();
        //jsonifiedResponse.data.url or jsonifiedResponse.data.id for example


      if (!response.ok) {
        const errorMessage = `${response.status} ${response.statusText}
        ${jsonifiedResponse.message}`;
        throw new Error(errorMessage);
      }
      return jsonifiedResponse;
    } catch(error) {
      return error;
    }
  }
}
// Business Logic
// this does something with the static
async function getGif(fish) {
  const response = await GifApiCall.getGif(fish);
  if (response.main) {
    printElements(response, fish);
  } else {
    printError(response, fish);
  }
}

