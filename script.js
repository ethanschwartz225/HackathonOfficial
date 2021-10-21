let input = document.getElementById("input");
let button = document.getElementById("button");
let cocktailContainer = document.getElementById("cocktailContainer");

button.addEventListener("click", addToList);

function addToList(event) {
    event.preventDefault();
    let newIngredient =input.value;
    cocktailContainer.appendChild(newIngredient);
}

