//  Header

let getElement = document.getElementsByClassName("icons")[0];
let act = (getElement.onclick = function () {
  let getLinks = document.getElementsByClassName("links")[0];
  const getUl = document.getElementsByClassName("ul-list")[0];

  //   v.style.cssText = "display: flex ; flex-direction : column";
  let getLogoElement = document.querySelector('[alt="logo image"]');
  // Add Class Open to the link
  getLogoElement.classList.toggle("openlogo");
  getLinks.classList.toggle("open");
  getUl.classList.toggle("openlist");
});
// creations //
let getScreenWidth = screen.width;
let src = [
  "image-deep-earth.jpg",
  "image-night-arcade.jpg",
  "image-soccer-team.jpg",
  "image-grid.jpg",
  "image-from-above.jpg",
  "image-pocket-borealis.jpg",
  "image-curiosity.jpg",
  "image-fisheye.jpg",
];
if (getScreenWidth < 768) {
  for (let x = 0; x < 8; x++) {
    getImages = document.getElementsByClassName("width-screen")[x];
    getImages.setAttribute("src", `images/mobile/${src[x]}`);
  }
  // add Button
  let createButton = document.createElement("button");
  getElementPrintButton =
    document.getElementsByClassName("creations-content")[0];
  createButton.appendChild(document.createTextNode("SEE ALL"));
  createButton.setAttribute("class", "editButton");
  createButton.classList.add("buttom-second");
  getElementPrintButton.after(createButton);
}
