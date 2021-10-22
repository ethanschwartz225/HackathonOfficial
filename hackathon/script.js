// Extensive List of ingredients;
let drink = {
    liquid: [{
    item: "apple juice",
    color:"yellow",
    },
   
    {
    item: "orange juice",
    color:"orange",
    },
    {
    item: "vodka",
    color:"white",
     },
    
    {
    item: "whiskey",    
    color:"brown",
    },
    
    {
    item: "tequila",
    color:"white",
    },
    
    {
    item: "coke",
    color:"brown",
    },
    {
    item: "redbull",
    color:"gold",
    },
    {
    item: "tomato juice",
    color:"red",
    }
    ],
    solid: [{
    item: "ice",
    color:"lightgray",
    },
   
    {
    item: "lime",
    color:"green",
    },
   
    {
    item: "orange",
    color:"orange",
    }]
}
let button = document.getElementById("button");
let ingredientList = document.getElementById("ingredientList");
let deleteButton = document.createElement("input");
let addButton = document.createElement("input");
let input = document.getElementById("input");


let colorItem = Object.keys(drink.liquid);
console.log(colorItem)
let drinkItem = Object.keys(drink.liquid[1]);
// let CIValue = Object.value(colorItem)
// console.log(drinkItem)


// selcects object item inside of list of arrays. Need to figure out how to select an inputted item 
// and automatically recieve its color
// function findColor(){
// for(i=0; i <drink.liquid.length; i++){
//     if(input.value == drinkItem){
//         // console.log(drinkItem)
//     }
//     else if(input.value = colorItem){
//         console.log("we dont have this drink")
//     }
//     else{
//         console.log("couldnt match a color")
//     }
//     }   
// }
// findColor()



button.addEventListener("click", addToList);
// button.addEventListener("click", addToCup);
function addToList(event) {
    event.preventDefault()
    let newIngredient = document.createElement("h3");
    newIngredient.append(input.value);
    ingredientList.appendChild(newIngredient);
    input.value = "";
    // let liquidObj = drink.liquid.input.value;
    // console.log(liquidObj)

    //creates button to add an item to recipe list again
    newIngredient.appendChild(addButton);
        addButton.setAttribute("type", "button");
        addButton.setAttribute("value", "Add");
        addButton.classList.add("addButton");

    //  creates button to omit an item from recipe list
    newIngredient.appendChild(deleteButton);
         deleteButton.setAttribute("type", "button");
        deleteButton.setAttribute("value", "Delete");
        deleteButton.classList.add("deleteButton");
        deleteButton.addEventListener("click", function(event){
        newIngredient.remove()
        })
        ingredientList.appendChild(newIngredient);
}

// function addToCup(event){
//     event.preventDefault();

// }







// let bgColor 
// function getBgColor(){
//    colorBg =  this.style.backgroundColor; 
// }
// let cocktails =  {drinks: [
//     {color: "orange", drink: "orange juice"},
//     {color: "yellow", drink: "apple juice"},
//     {color: "white", drink: "milk"},
//     {color: "brown", drink: "coffee"},
//     {color: "gold", drink: "red bull"},
//     {color: "blue", drink: "water"},
//     {color: "red", drink: "tomato juice"},
//     {color: "purple", drink: "prune juice"}
// ]
// }
// let button = document.getElementById("button");
// let ingredientList = document.getElementById("ingredientList");
// let deleteButton = document.createElement("input");
// let addButton = document.createElement("input");
// let input = document.getElementById("input");
// let ul = document.createElement("ul")

// let drinkinput = cocktails.drinks
// let objKey = Object.keys(drinkinput)
// let objValue = Object.values(drinkinput)
// for (i=0; i < drinkinput.length; i++){
//     ul.classList.add("listOfDrinks")
//     let li = document.createElement("li")
//     li.setAttribute("id", drinkinput[i].color)
//     li.innerText = drinkinput[i].drink
//     li.style.border = "1px solid black";
//     li.classList.add("drinkColor");
//     ul.appendChild(li)
//     ingredientList.appendChild(ul)
// }


