//importing the value from another js file
import { getRating } from "./index.js";

//set the value to the .value class
const value = document.querySelector(".value");
value.textContent = getRating();
