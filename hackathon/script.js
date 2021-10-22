// id's all input components
let input = document.getElementById("input");
let button = document.getElementById("button");

button.addEventListener("click", nameDrink);

function nameDrink(event){
    event.preventDefault()
    let something = document.getElementById("cocktailHeader");
    something.innerHTML = input.value
    }

    drinks = [
        "Redbull",
        "Apple Juice",
        "Orange Juice",
        "Vodka",
        "Tequila",
        "Tomato Juice",
        "Rum",
        "Whiskey",
        "Arak",
    ]

for(let i = 0; i < drinks.length; i++) {
    let drinkItem = document.createElement("h3");
    let ingredientList = document.getElementById("ingredientList");
    drinkItem.innerText = drinks[i];
    ingredientList.appendChild(drinkItem);
    drinkItem.classList.add("ingredientName");
    drinkItem.addEventListener("click", addToRecipeArray);
}

let recipeArray = [];

function addToRecipeArray(event){
    event.preventDefault();
    recipeArray.push(event.target.textContent);
    // console.log(event.target.textContent);
}

let submitDrink = document.getElementById("submitDrink");
submitDrink.addEventListener("click", logDrink);

function logDrink(event){
    event.preventDefault();
    let newOrder = recipeArray;
    console.log(newOrder);
    recipeArray = [];
}


