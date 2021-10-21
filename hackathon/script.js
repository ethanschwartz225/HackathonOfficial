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
//

let input = document.getElementById("input");
let button = document.getElementById("button");
let ingredientList = document.getElementById("ingredientList");

button.addEventListener("click", addToList);
button.addEventListener("click", addToCup);

function addToList(event) {
    event.preventDefault()
    let newIngredient = document.createElement("h3");
    newIngredient.append(input.value);
    ingredientList.appendChild(newIngredient)
}

function addToCup(event){
    event.preventDefault();
}

