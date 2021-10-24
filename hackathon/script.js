// id's all input components
let input = document.getElementById("input");
let button = document.getElementById("button");
let orderContainer = document.getElementById("orderContainer")

button.addEventListener("click", nameDrink);

function nameDrink(event){
    event.preventDefault()
    let drinkHeader = document.getElementById("cocktailHeader");
    drinkHeader.innerHTML = input.value;
    input.value = "";
    }

    drinks = [
        "Redbull",
        "Apple Juice",
        "Orange Juice",
        "Vodka",
        "Tequila",
        "Rum",
        "Whiskey",
        "Arak",
        "Coke",
        "Soda",
        "Ice"
    ]

for(let i = 0; i < drinks.length; i++) {
    let drinkItem = document.createElement("h3");
    let ingredientList = document.getElementById("ingredientList");
    drinkItem.innerText = drinks[i];
    ingredientList.appendChild(drinkItem);
    drinkItem.classList.add("ingredientName");
    drinkItem.addEventListener("click", addToRecipeArray);
}

let orderList = [];
let recipeArray = [];

orderContainer = document.getElementById(orderContainer);

function addToRecipeArray(event){
    event.preventDefault();
    recipeArray.push(event.target.textContent);
    console.log(event.target.textContent);
    // console.log(event.target.textContent);
    event.target.style.color = "#43a7ff";
    document.getElementById("submitDrink").addEventListener("click", function(){
        event.target.style.color = "gray";
    })
}

let submitDrink = document.getElementById("submitDrink");
submitDrink.addEventListener("click", logDrink);
submitDrink.addEventListener("click", clearInput);

function logDrink(event){
    event.preventDefault();
    orderList.push(recipeArray)
    console.log(recipeArray);
    console.log(orderList);

let newOrder = document.createElement("div");
newOrder.classList.add("newOrder")
document.getElementById("orderContainer").appendChild(newOrder);

let drinkHeader = document.getElementById("cocktailHeader");

let orderName = document.createElement("h1")
orderName.innerText = drinkHeader.innerText;
newOrder.appendChild(orderName);
orderName.classList.add("orderHeader")

for(let i = 0; i < recipeArray.length; i++) {
    let orderRecipe = document.createElement("h4");
    orderRecipe.innerText += recipeArray[i]
    newOrder.appendChild(orderRecipe)
    orderRecipe.classList.add("h4")
}
    recipeArray = [];
}

function clearInput(){
    input.value = "";
    document.getElementById("cocktailHeader").textContent = "My Cocktail";
}
