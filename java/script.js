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

// Utiliser le bouton Shake/Stop unique
const myImage = document.querySelector("img");
const shakeStopBtn = document.getElementById("shakeStopBtn");

if (myImage && shakeStopBtn) {
  shakeStopBtn.onclick = () => {
    myImage.classList.toggle("shake");
    shakeStopBtn.value = myImage.classList.contains("shake") ? "Stop" : "Shake";
  };
}