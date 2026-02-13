const breedsContainer = document.getElementById("breeds-container");

fetch("https://api.thedogapi.com/v1/breeds")
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