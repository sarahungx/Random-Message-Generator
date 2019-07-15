
var foods = [
  "Spaghetti",
  "Hamburger",
  "Bread",
  "Cereal",
  "Chinese takeout",
  "Noodles",
  "Pork Buns",
  "Boba",
  "Ice cream",
  "Fruit bowl",
  "Pizza",
  "Hamburger",
  "Hot Dog",
  "Quesadilla",
  "Burrito",
  "Meatloaf",
  "Sushi",
  "Soup",
  "Salad",
  "Ramen",
  "Fried Chicken",
  "Donuts",
  "Shaved Ice",
  "Eggs",
  "Ravioli"
];

var button = document.getElementById('button');

button.addEventListener("click", function() {
  var total = randNum(foods);
  changeFood(total);
})


function randNum(array){
var randDeci = Math.random();
var randBig = randDeci * array.length;
var random = Math.floor(randBig);
return random;
}

randNum(foods);

function changeFood(someNum) {
  var newFood = document.getElementById ('placeholder');
  newFood.innerHTML = foods[someNum];
}
//
