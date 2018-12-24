//MAP function works like forEach but it returns an array with each iteam changed, however you want.
//You can learn more abou Map function here: https://codeburst.io/learn-understand-javascripts-map-function-ffc059264783


var drinks = ['coffee soda', 'tea', 'whiskey'];

var coldDrinks = drinks.map(function(drink) {
	return 'iced' + drink;
});

console.log(coldDrinks);

//Another example

const fruits = ['apples', 'oranges', 'grapes'];

const singleFruit = fruits.map((fruit)=> fruit.slice(0, -1));
console.log(singleFruit);