//DESTRUCTURING
// You can learn more about destructuring here: https://codeburst.io/es6-destructuring-the-complete-guide-7f842d08b98f

const profile = {
    name: 'John Doe',
    address: {
        street: '40 mant st',
        city: 'Boston'
    },
    hobbies: ['movies', 'music']
};

const {name} = profile;
const {street} = profile.address;
console.log(name);
console.log(street);