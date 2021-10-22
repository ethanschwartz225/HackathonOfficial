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
//id's all input components
let input = document.getElementById("input");
let button = document.getElementById("button");
let ingredientList = document.getElementById("ingredientList");
let deleteButton = document.createElement("input");
let addButton = document.createElement("input");

//creates count for list item *****needs to count each item, individually****
let itemCount = document.createElement("p");
itemCount = 1;


// add event listeners to input --> adds to ingredientList
button.addEventListener("click", addToList);
button.addEventListener("click", addToCup);

function addToList(event) {
    event.preventDefault()
    if (input.value.length > 0) {
        let newIngredient = document.createElement("h3");
        newIngredient.append(input.value);
        ingredientList.appendChild(newIngredient);
            input.value = "";

//  creates buttons to add/omit an item to/from recipe list again
    newIngredient.appendChild(addButton);
        addButton.setAttribute("type", "button");
        addButton.setAttribute("value", "Add");
        addButton.classList.add("addButton");

    newIngredient.appendChild(deleteButton);
        deleteButton.setAttribute("type", "button");
        deleteButton.setAttribute("value", "Delete");
        deleteButton.classList.add("deleteButton");

// Event listeners for both add and delete buttons
        addButton.addEventListener("click", function() {
            itemCount += 1;
            console.log(itemCount);
        })

        deleteButton.addEventListener("click", function() {
            itemCount -= 1;
            console.log(itemCount);
        })
    }
}

function addToCup(event){
    event.preventDefault();

}

