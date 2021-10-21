// Extensive List of ingredients;
let drink = [
   
    {
    item: "Applejuice",
    color:"yellow",
    matter:"liquid",
    },
   
    {
    item: "Orangeuice",
    color:"orange",
    matter: "liquid",
    },
   
    {
    item: "ice",
    color:"lightgray",
    matter:"solid",
    },
   
    {
    item: "vodka",
    color:"white",
    matter:"liquid",
     },
    
    {
    item: "whiskey",    
    color:"brown",
    matter:"liquid",
    },
    
    {
    item: "tequila",
    color:"white",
    matter:"liquid",
    },
    
    {
    item: "coke",
    color:"brown",
    matter:"liquid",
    },
   
    {
    item: "lime",
    color:"green",
    matter:"solid",
    },
   
    {
    item: "orange",
    color:"orange",
    matter:"solid",
    },
   
    {
    item: "redbull",
    color:"gold",
    matter:"liquid",
    },
    {
    item: "tomatojuice",
    color:"red",
    matter:"liquid"
    }
]
let button = document.getElementById("button");
let ingredientList = document.getElementById("ingredientList");
let deleteButton = document.createElement("input");
let addButton = document.createElement("input");
let input = document.getElementById("input");

function findColor(){
for(i=0; i <drink.length; i++){
    let drinkItem = drink[i];
    let colorItem = drinkItem.color;
    console.log(colorItem);
    console.log(drinkItem);
    }
}
findColor()

// button.addEventListener("click", addToList);
// button.addEventListener("click", addToCup);
// function addToList(event) {
//     event.preventDefault()
//     let newIngredient = document.createElement("h3");
//     // drinkColor(input.value)


//     //need to find the color when the object user inputs the object item
//     // console.log(drink.find(input.value));
//     newIngredient.append(input.value);
//     // ingredientList.appendChild(newIngredient);
//     input.value = "";

//     //  creates button to add an item to recipe list again
//     newIngredient.appendChild(addButton);
//         addButton.setAttribute("type", "button");
//         addButton.setAttribute("value", "Add");
//         addButton.classList.add("addButton");

//     //  creates button to omit an item from recipe list
//     newIngredient.appendChild(deleteButton);
//          deleteButton.setAttribute("type", "button");
//         deleteButton.setAttribute("value", "Delete");
//         deleteButton.classList.add("deleteButton");
//         deleteButton.addEventListener("click", function(event){
//         newIngredient.remove()
//         })
//         ingredientList.appendChild(newIngredient);
// }

// // function addToCup(event){
// //     event.preventDefault();

// // }

