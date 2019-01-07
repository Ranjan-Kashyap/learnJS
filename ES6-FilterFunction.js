//FILTER
// Filter function is used on array to return the array filtered out however you want. 

// You can learn more about filter here: https://codeburst.io/learn-understand-javascripts-filter-function-bde87bce206

const people = [
{id: 1, name: 'karen'},
{id: 2, name: 'bob'},
{id:3, name: 'sharon'}
];

const people2 = people.filter(xyz => xyz.id !== 2);
console.log(people2);