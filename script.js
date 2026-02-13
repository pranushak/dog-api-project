const breedsContainer = document.getElementById("breeds-container");

fetch("https://api.thedogapi.com/v1/breeds", {
  headers: {
    "x-api-key": "live_1thIqxL7uHMf7gK6B0PX1dXm6nOnu0QLbavE4Vce2AVFtAliJ4CZ0hp76a5IwAOU"
  }
})
  .then(response => response.json())
  .then(data => {
    breedsContainer.innerHTML = "";

    data.slice(0, 10).forEach(breed => {
      const breedDiv = document.createElement("div");
      breedDiv.className = "breed-card";

      breedDiv.innerHTML = `
        <h3>${breed.name}</h3>
        <p><strong>Temperament:</strong> ${breed.temperament || "Unknown"}</p>
        <p><strong>Life Span:</strong> ${breed.life_span}</p>
      `;

      breedsContainer.appendChild(breedDiv);
    });
  })
  .catch(error => {
    breedsContainer.innerHTML = "<p>Failed to load breeds.</p>";
    console.error(error);
  });
