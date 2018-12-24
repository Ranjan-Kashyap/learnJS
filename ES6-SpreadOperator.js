//SPREAD
// You can learn more about spread operator here: https://codeburst.io/javascript-the-spread-operator-a867a71668ca

const arr = [1, 2, 3, 4];

const arr2 = [...arr, 5];

console.log(arr2);


//We can do this with objects too

const person = {
    name: 'brad',
    age: 36
}

const person2 = {
 ...person,
 email: 'brad@gmail.com'
}

console.log(person2);