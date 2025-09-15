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

//ajouter un bouton pour shake l'image et un autre pour l'arrêter en dessous de l'image
let myImage = document.querySelector("img");
let shakeButton = document.createElement("button");
shakeButton.textContent = "Shake";
myImage.after(shakeButton);
shakeButton.addEventListener("click", () => {
  myImage.classList.add("shake");
});
document.body.appendChild(shakeButton);

let stopButton = document.createElement("button");
stopButton.textContent = "Stop";
myImage.after(stopButton);
stopButton.addEventListener("click", () => {
  myImage.classList.remove("shake");
});
document.body.appendChild(stopButton);  

