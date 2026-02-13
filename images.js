 const imagesContainer = document.getElementById("images-container");

fetch("https://api.thedogapi.com/v1/images/search?limit=5")
  .then(response => response.json())
  .then(data => {
    imagesContainer.innerHTML = ""; 

    data.forEach(dog => {
      const img = document.createElement("img");
      img.src = dog.url;
      img.className = "dog-image";

      imagesContainer.appendChild(img);
    });
  })
  .catch(error => {
    imagesContainer.innerHTML = "<p>Failed to load images.</p>";
    console.error(error);
  });