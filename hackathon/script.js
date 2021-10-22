// cocktails =  {drinks: [
//     {color: "orange", drink: "orange juice"},
//     {color: "yellow", drink: "apple juice"},
//     {color: "white", drink: "milk"},
//     {color: "brown", drink: "coffee"},
//     {color: "gold", drink: "red bull"},
//     {color: "blue", drink: "water"},
//     {color: "red", drink: "tomato juice"},
//     {color: "purple", drink: "prune juice"}
// ]}

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

for(let i = 0; i < drinks.length; i++){
    let drinkItem = document.createElement("h3");
    let ingredientList = document.getElementById("ingredientList");
    drinkItem.innerText = drinks[i];
    ingredientList.appendChild(drinkItem);
}