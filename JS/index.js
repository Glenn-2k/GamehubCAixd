import { apiUrl } from "./api.js";
import { gamesPage } from "../JS/products/games.js";
import { getGames } from "../JS/products/games.js";
import { gamePage } from "./products/game.js";

if (location.pathname === "/games") {
  gamesPage();
}

if (location.pathname === "/product-specific.html") {
  gamePage();
}
