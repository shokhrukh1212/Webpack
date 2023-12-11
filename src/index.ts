require("./styles/main.scss");

const javascriptImage = document.getElementById(
  "javascript-image"
) as HTMLImageElement;
const typescriptImage = document.getElementById(
  "typescript-image"
) as HTMLImageElement;

javascriptImage.src = require("./assets/javascript.png");
typescriptImage.src = require("./assets/typescript.png");
