import { apiUrl } from "../api.js";

const gameContainer = document.querySelector(".games-container");

export async function getGames() {
  try {
    const response = await fetch(apiUrl);
    const results = await response.json();
    return results;
  } catch (error) {
    console.log("an error occured");
    gameContainer.innerHTML = "An error occured";
  }
}

const game = await getGames();

const gameArray = Array.from(game);

export async function gamesPage() {
  const games = await getGames();
  displayGames(games);
}

function displayGames(gamesList) {
  try {
    gameContainer.innerHTML = "";
    gameArray.forEach((game) => {
      gameContainer.innerHTML += `
        <div class="game">
        <a href="/product-specific.html?id=${game.id}"><img src="${game.image}"
                                    alt="image of ${game.title} cover" class="games-cover"></a>
        <h2 class="games-title">${game.title}</h2>
        <p class="price">$${game.price}</p>
        <a href="/cart-full.html" id="add-to-cart">Add to cart</a>
        </div>`;
    });
  } catch (error) {
    console.log("an error occured");
    gameContainer.innerHTML = "An error occured";
  }
}
