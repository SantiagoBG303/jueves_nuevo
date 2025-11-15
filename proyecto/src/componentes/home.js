export default async function mostrarHome() {
  const app = document.getElementById("app");
  app.innerHTML = "<h2>Cargando personajes...</h2>";

  try {
    const response = await fetch("https://api.disneyapi.dev/character");
    const data = await response.json();
    const personajes = data.data;

    app.innerHTML = "<h2>Personajes de Disney</h2>";

    personajes.forEach((item) => {
      const card = document.createElement("div");
      card.classList.add("app-card");
      card.innerHTML = `
        <img src="${item.imageUrl}" width="150"/>
        <h3>${item.name}</h3>
        <p><strong>Películas:</strong> ${item.films.join(", ")}</p>
      `;
      app.appendChild(card);
    });

  } catch (error) {
    app.innerHTML = "<p>Error cargando API 😢</p>";
    console.error(error);
  }
}
