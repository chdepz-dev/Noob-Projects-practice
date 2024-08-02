const nav = document.querySelector(".nav-links");
const toggleNav = document.querySelector(".hamburger")
let card = document.querySelector(".recipe-card")
let searchInput;
toggleNav.addEventListener("click", () => {
  toggleNav.classList.toggle("open")
  nav.classList.toggle("open")
})


const url = 'https://gustar-io-deutsche-rezepte.p.rapidapi.com/search_api?text=K%C3%A4se';
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': 'eed2413964mshc68f71784c9755ep1a8c28jsnb92b4bf9a34a',
    'x-rapidapi-host': 'gustar-io-deutsche-rezepte.p.rapidapi.com'
  }
};


// fecthing api
class GenrateRecipe {
  constructor(url, options, searchInput) {
    this.url = url;
    this.options = options;
    this.searchText = searchInput
  }
  async getRecipe() {
    try {
      const response = await fetch(this.url, this.options);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status} - ${response.statusText}`);
      }
      const recipes = await response.json();
      console.log(recipes)
      for (const recipe of recipes) {
        const ingredients = recipe.ingredients && Array.isArray(recipe.ingredients)
          ? recipe.ingredients.map(ingredient => ingredient.name).join(', ')
          : 'Not available';
        let newHtml = `
        <div class="recipe-card-box">
                  <img src="${recipe.image_urls}" alt="">
                  <div class="description">
                    <h3><span>Title:</span> ${recipe.title}</h3>
                    <p> <span>Ingredents: </span>${ingredients}</p>
                    <p> <span>Nutrition: </span>${recipe.nutrition.kcal}</p>
                    <p> <span>Portion: </span>${recipe.portions}</p>
                    <p><span>Total Time:</span> ${recipe.totalTime / 60} min</p>
                  <a class="read-more" href="${recipe.source}" target="_blank">Read More!</a>
                  </div>
        `
        card.innerHTML += newHtml
      }

    } catch (error) {
      console.error('Error fetching recipe:', error);
    }
  }

}
const recipe = new GenrateRecipe(url, options, searchInput)
recipe.getRecipe()

