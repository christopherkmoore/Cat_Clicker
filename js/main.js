var cat = {
	"cats": [
		{
			"name": "chewy",
			"src": "images/chewy.jpg"
		},
		{
			"name": "jet",
			"src": "images/jet.jpg"
		},
		{
			"name": "larry",
			"src": "images/larry.jpg"
		},
		{
			"name": "nestor",
			"src": "images/nestor.jpg"
		},
		{
			"name": "charly",
			"src": "images/unnamed.jpg"
		}
		]
}

var catElementGenerator = function() {
	var catContainer,
		catImageContainer,
		catImage,
		catDescriptionContainer,
		catName,

	catContainer = document.getElementById("#navBar").createElement("div");

	catContainer.classList.add("catPet");
	catContainer.style.width = "45%";
	catContainer.style.height = "325px";




};
for (var i = 0; i<5; i++){
	var navBarDiv = document.getElementById("navBar");
	navBarDiv.append(catElementGenerator());
}

