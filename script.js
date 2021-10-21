// Extensive List of ingredients;
applejuice = {
    color:"yellow",
    matter:"liquid",
}

orangejuice = {
    color:"orange",
    matter: "liquid",
}

ice = {
    color:"lightgray",
    matter:"solid",
}

vodka = {
    color:"white",
    matter:"liquid",
}

whiskey = {
    color:"brown",
    matter:"liquid",
}

tequila = {
    color:"white",
    matter:"liquid",
}

coke = {
    color:"brown",
    matter:"liquid",
}

lime = {
    color:"green",
    matter:"solid",
}

orange = {
    color:"orange",
    matter:"solid",
}

redbull = {
    color:"gold",
    matter:"liquid",
}

tomatojuice = {
    color:"red",
    matter:"liquid"
}


let enterButton = document.getElementById("enter");
let newIngredient = document.createElement("p");
let ingredient = document.getElementById("ingredient");
let myCocktail = document.getElementById("myCocktail");

enterButton.addEventListener("click", enterIngredient);

function enterIngredient(event){
    event.preventDefault();
    if(ingredient.value.length > 0) {
        newIngredient.textContent = ingredient.value;
        myCocktail.appendChild(newIngredient);
        ingredient.value = "";
    }
}

