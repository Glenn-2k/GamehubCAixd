const url = "https://api.noroff.dev/api/v1/gamehub/";

const productSpecific = document.querySelector(".product-specific-content");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const apiCall = url + id;

async function getGame() {
  try {
    const response = await fetch(apiCall);
    const results = await response.json();
    return results;
  } catch (error) {
    productSpecific.innerHTML = "An error occured";
  }
}

export async function gamePage() {
  const specificGame = await getGame();
  displayGame(specificGame);
}

function displayGame(specificGame) {
  try {
    productSpecific.innerHTML = `
  <h1 class="specific-heading">${specificGame.title}</h1>
  <div class="grid-container-specific">
      <div class="specific-1">
          <img src="${specificGame.image}" alt="cover of ${specificGame.title}"
              class="product-specific-cover">
      </div>
      <div class="specific-2">
          <p class="specific-text">${specificGame.description}</p>
          <p class="specific-price">$${specificGame.price}</p>
          <a href="/cart-full.html" id='add-to-cart-specific'>Add to cart</a>
      </div>
  </div>`;
  } catch (error) {
    productSpecific.innerHTML = "An error occured";
    console.log("an error occured");
  }

  document.title = `Gamehub | ${specificGame.title}`;
}
