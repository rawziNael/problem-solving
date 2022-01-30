//solution of the first.
var array = [];

function getRecipeKey(obj) {
    for (const [key, value] of Object.entries(obj)) {
        array.push(`CustomerName: ${key} , Age: ${value}`);
    }
    return array;
}




//solution of the second.
var array = [];

function getRecipeKey(obj) {
    for (const [key, value] of Object.entries(obj)) {
        array.push(`${key}: ${value}`);
    }
    return array;
}
console.log(getRecipeKey(recipeInfo));

