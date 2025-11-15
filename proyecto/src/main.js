import { auth } from "./firebaseConfig.js";
import { onAuthStateChanged } from "firebase/auth";

import mostrarLogin from "./componentes/login.js";
import mostrarRegistro from "./componentes/registro.js";
import mostrarOriginal from "./componentes/original.js";
import mostrarHome from "./componentes/home.js"; 
import './style.css';

// Detectar usuario
onAuthStateChanged(auth, (user) => {
  const menu = document.getElementById("menu");

  if (user) {
    // Usuario logueado
    menu.innerHTML = `
      <button id="menuHome">Home</button>
      <button id="menuOriginal">Original</button>
      <button id="menuLogout">Logout</button>
    `;

    document.getElementById("menuHome").addEventListener("click", mostrarHome);
    document.getElementById("menuOriginal").addEventListener("click", mostrarOriginal);
    document.getElementById("menuLogout").addEventListener("click", () => auth.signOut());

    mostrarHome(); // carga inicial
  } else {
    // Usuario NO logueado
    menu.innerHTML = `
      <button id="menuLogin">Login</button>
      <button id="menuRegistro">Registro</button>
    `;

    document.getElementById("menuLogin").addEventListener("click", mostrarLogin);
    document.getElementById("menuRegistro").addEventListener("click", mostrarRegistro);

    mostrarLogin(); // pantalla inicial sin usuario
  }
});
