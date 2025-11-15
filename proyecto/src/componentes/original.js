import { db } from "../firebaseConfig.js";
import { collection, addDoc } from "firebase/firestore";

export default function mostrarOriginal() {
  // Objeto base inicial
  let proyecto = {
    nombreapp: "",
    descripcion: "",
    icono: "",
    integrantes: [],
    actividad: "Capacitor Firebase",
    url: ""
  };

  const app = document.getElementById("app");
  app.innerHTML = "<h2>Guardar proyecto en Firestore</h2>";

  const form = document.createElement("div");
  const resultado = document.createElement("pre");
  resultado.textContent = JSON.stringify(proyecto, null, 2);

  const campos = [
    { key: "nombreapp", label: "Nombre de la app" },
    { key: "descripcion", label: "Descripción" },
    { key: "icono", label: "URL del ícono" },
    { key: "actividad", label: "Actividad" },
    { key: "url", label: "URL del proyecto" },
  ];

  campos.forEach(({ key, label }) => {
    const p = document.createElement("p");
    p.textContent = label;

    const input = document.createElement("input");
    input.placeholder = label;
    input.oninput = () => {
      proyecto[key] = input.value;
      resultado.textContent = JSON.stringify(proyecto, null, 2);
    };

    form.appendChild(p);
    form.appendChild(input);
  });

  const pIntegrantes = document.createElement("p");
  pIntegrantes.textContent = "Integrantes (separados por coma):";
  const integrantesInput = document.createElement("input");
  integrantesInput.placeholder = "Ej: santiago, maria, juan";

  integrantesInput.oninput = () => {
    proyecto.integrantes = integrantesInput.value.split(",").map(i => i.trim());
    resultado.textContent = JSON.stringify(proyecto, null, 2);
  };

  form.appendChild(pIntegrantes);
  form.appendChild(integrantesInput);

  const botonGuardar = document.createElement("button");
  botonGuardar.textContent = "Guardar en Firebase";

  botonGuardar.onclick = async () => {
    try {
      await addDoc(collection(db, "proyectos"), proyecto);
      alert("📦 Proyecto guardado con éxito en Firestore!");
    } catch (error) {
      alert("❌ Error al guardar: " + error.message);
    }
  };

  form.appendChild(botonGuardar);

  app.appendChild(form);
  app.appendChild(resultado);
}
