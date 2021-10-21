// Extensive List of ingredients;
let array =[
    {
    item: "Apple Juice",
    color:"yellow",
    matter:"liquid",
},
{
    item: "Orange Juice",
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


let input = document.getElementById("input");
let button = document.getElementById("button");
let ingredientList = document.getElementById("ingredientList");
let deleteButton = document.createElement("input");
let addButton = document.createElement("input");

button.addEventListener("click", addToList);
// button.addEventListener("click", addToCup);

function addToList(event) {
    event.preventDefault()
    for(i=0; i < input.value.length; i++){
    let newIngredient = document.createElement("h3");
    console.log(newIngredient)
    let newId = newIngredient.setAttribute("id", `${input.value}`);
    newIngredient.append(input.value);
    ingredientList.appendChild(newIngredient);
    input.value = "";
    
    let addbtnId = document.getElementById(newId)
    console.log(addbtnId)
    for(i=0; i < ingredientList; i++){
    // console.log(newIClass)
    //  creates button to add an item to recipe list again
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
        }
    }


}
let addbtnId = document.getElementById(newId)
console.log(addbtnId)

// function addToCup(event){
//     event.preventDefault();

// }

