(function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {

	// Obtain ingredients parameter from request URL
	var ingredients = request.queryParams.ingredients || "";

  // IMPORTANT: Replace SPOONACULAR_API_KEY with your own Spoonacular API key
	var apiKey = "SPOONACULAR_API_KEY";

  // API URL that searches for recipes by ingredients
	var url = "https://api.spoonacular.com/recipes/findByIngredients?ingredients=" +
		encodeURIComponent(ingredients) + "&number=5&apiKey=" + apiKey;

	// Call Spoonacular API
	var r = new sn_ws.RESTMessageV2();
	r.setHttpMethod("GET");
	r.setEndpoint(url);
	var res = r.execute();
	var recipes = JSON.parse(res.getBody());

	// Initialize array to hold recipe details
	var detail = [];

	// Log for debugging in ServiceNow system log
	gs.info("Ingredients received: " + ingredients);
	gs.info("Spoonacular response: " + JSON.stringify(recipes));

	// Loop through each recipe from initial search
	recipes.forEach(function(recipe) {
		// Build URL to obtain info for each recipe
		var detailUrl = "https://api.spoonacular.com/recipes/" + recipe.id + "/information?apiKey=" + apiKey;
		var r2 = new sn_ws.RESTMessageV2();
		r2.setHttpMethod("GET");
		r2.setEndpoint(detailUrl);
		var res2 = r2.execute();
		var body2 = JSON.parse(res2.getBody());

		// Push relevant info into detail array
		detail.push({
			title: body2.title,
			image: body2.image,
			sourceUrl: body2.sourceUrl
		});
	});

	// Set response content type to JSON
	response.setContentType('application/json');

	// Set HTTP status to "ok"
	response.setStatus(200);

	// Send recipes array as response body
	response.setBody({ recipes: detail });
  
})(request, response);
