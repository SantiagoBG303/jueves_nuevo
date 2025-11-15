import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig.js"; 
import mostrarRegistro from "./registro.js";  

export default function mostrarLogin() {
  const app = document.getElementById("app");

  app.innerHTML = `
    <div>
      <h2>Iniciar Sesión</h2>
      <input type="email" id="correo" placeholder="Correo electrónico"><br>
      <input type="password" id="contrasena" placeholder="Contraseña"><br>
      <button id="btnLogin">Ingresar</button>
      <br><br>
      <button id="btnIrRegistro">Crear cuenta nueva</button>
    </div>
  `;

  // evento para login
  document.getElementById("btnLogin").addEventListener("click", async () => {
    const correo = document.getElementById("correo").value;
    const contrasena = document.getElementById("contrasena").value;

    try {
      await signInWithEmailAndPassword(auth, correo, contrasena);
      alert("Inicio de sesión exitoso");
      window.location.reload();
    } catch (error) {
      alert("Error al iniciar sesión: " + error.message);
    }
  });

  // evento para ir a registro
  document.getElementById("btnIrRegistro").addEventListener("click", () => {
    mostrarRegistro();
  });
}
