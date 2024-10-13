//Desarrollar al menos 3 botones en el navegador que
//represente un cambio de tema de la página.

let boton1 = document.createElement("button");
let boton2 = document.createElement("button");
let boton3 = document.createElement("button");
let botonReset = document.createElement("button");

boton1.textContent = "Boton 1";
boton2.textContent = "Boton 2";
boton3.textContent = "Boton 3";
botonReset.textContent = "Reset";

boton1.style.background = "red";
boton2.style.background = "blue";
boton3.style.background = "green";
botonReset.style.background = "white";

let body = document.body;

body.style.background =
  "linear-gradient(90deg, rgba(0,0,0,1) 32%, rgba(255,255,255,1) 100%)";

body.appendChild(boton1);
body.appendChild(boton2);
body.appendChild(boton3);
body.appendChild(botonReset);

//Al pulsar cada uno de los botones, los colores principales de la página cambiarán.
boton1.addEventListener("click", () => {
  body.style.background = "red";
});

boton2.addEventListener("click", () => {
  body.style.background =
    "linear-gradient(90deg, rgba(9,9,121,1) 50%, rgba(43,152,175,1) 100%)";
});

boton3.addEventListener("click", () => {
  body.style.background = "green";
});

botonReset.addEventListener("click", () => {
  body.style.background =
    "linear-gradient(90deg, rgba(0,0,0,1) 32%, rgba(255,255,255,1) 100%)";
});
