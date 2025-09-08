document.addEventListener("DOMContentLoaded", () => {
	// Background
	document.documentElement.style.backgroundColor = "#1e1e1e";
	document.body.style.backgroundColor = "#1e1e1e";
	document.body.style.margin = "0";
	document.body.style.color = "#f5f5f5";
	document.body.style.textAlign = "center";
	document.body.style.fontFamily = "Ariel, sans-serif";

	// Title
	const heading = document.querySelector("h1");
	heading.style.fontWeight = "bold";

	// Instructions
	const instructions = document.querySelector("p");
	instructions.style.fontSize = "17px";
	instructions.style.color = "#bbbbbb";
	instructions.style.fontWeight = "bold";

	// User input
	const input = document.querySelector("input");
	input.style.borderRadius = "6px";
	input.style.width = "300px";
});

// Fetch and display recipes
function findRecipes() {
	// Get ingredients from user while removing extra spaces
	const ingredients = document.getElementById("ingredients").value.trim();

	// Make GET request to custom ServiceNow REST API endpoint
	fetch("/api/x_1829573_recipe_0/recipe/recipes?ingredients=" + encodeURIComponent(ingredients))
		.then(response => {
			// Check if response is ok
			if (!response.ok) {
				throw new Error("Network response was not ok " + response.statusText);
			}
			return response.json();
		})
		.then(data => {
			// Raw API response for debugging purposes
			console.log("Raw API response:", data);

			// Get recipes array from API response
            const recipesArray = data.result ? data.result.recipes : data.recipes;
            console.log("Recipes array extracted:", recipesArray);

			// Pass array to function in order to render on UI page
			displayRecipes(recipesArray);
		})
		.catch(error => {
			// Error handling
			console.error("Error fetching recipes:", error);
			document.getElementById("recipes").innerHTML = "<p style='color:red;'>Failed to load recipes.</p>";
		});
	}


function displayRecipes(recipes) {
    const container = document.getElementById("recipes");

	// Clear old results
    container.innerHTML = "";

	// Layout for recipe cards
	container.style.display = "flex";
	container.style.flexWrap = "wrap";
	container.style.justifyContent = "center";
	container.style.gap = "10px";
	container.style.marginTop = "20px";

	// Check if recipes array is empty or undefined
    if (!recipes || recipes.length === 0) {
		container.innerHTML = "<p>No recipes found.</p>";
		return;
    }

	// Loop through each recipe to create card element for each recipe
	// while styling every recipe card.
    recipes.forEach(recipe => {

		// Card
		const card = document.createElement("div");
		card.className = "recipe-card";
		card.style.border = "1px solid #ccc";
        card.style.borderRadius = "8px";
        card.style.padding = "10px";
        card.style.margin = "10px 0";
        card.style.width = "300px";
		
		// Recipe title
		const title = document.createElement("h3");
		title.textContent = recipe.title;
        title.style.fontSize = "16px";
        title.style.marginBottom = "8px";

		// Recipe image
		const img = document.createElement("img");
		img.src = recipe.image;
		img.alt = recipe.title;
		img.style.width = "100%";
        img.style.borderRadius = "4px";
        img.style.marginBottom = "8px";

		// Recipe link button 
		const button = document.createElement("button");
		button.textContent = "View Recipe";
		button.style.padding = "6px 12px";
        button.style.border = "none";
        button.style.borderRadius = "4px";
        button.style.backgroundColor = "#007bff";
        button.style.color = "#fff";
        button.style.cursor = "pointer";

		// Recipe link is opened in new browser tab
		button.onclick = () => {
			window.open(recipe.sourceUrl, "_blank"); 
		};

		// Add title, image, and button to card
		card.appendChild(title);
		card.appendChild(img);
		card.appendChild(button);

		// Append card to container
		container.appendChild(card);
	});
}
