console.log("Hello, World from script.js");

let myHeading = document.querySelector("h1");
myHeading.textContent += " 🤖 from JS";
myHeading.style.color = "purple";

let myHeading2 = document.createElement("h2");
myHeading2.textContent = "Welcome to the DOM";
myHeading.after(myHeading2);

let myHeading3 = document.createElement("h3");
setInterval(() => {
  myHeading3.textContent = new Date().toLocaleTimeString();
}, 1000);
myHeading.after(myHeading3);
document.body.insertBefore(myHeading3, document.querySelector("p"));

// supprimer un élement de la liste
let myList = document.querySelector("ul");
myList.removeChild(myList.firstElementChild);
myList.appendChild(document.createElement("li")).textContent = "Moi 3";

let caption = document.querySelector("caption");
caption.addEventListener("mouseover", () => {
  caption.style.color = "red";
});

// Utiliser les boutons existants dans le HTML
const myImage = document.querySelector("img");
const shakeButton = document.querySelector('input[value="Shake"]');
const stopButton = document.querySelector('input[value="Stop"]');

if (myImage && shakeButton && stopButton) {
  shakeButton.onclick = () => myImage.classList.add("shake");
  stopButton.onclick = () => myImage.classList.remove("shake");
}