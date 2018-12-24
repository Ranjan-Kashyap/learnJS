//CLASS

class Person {
  constructor (name, age) {
      this.name = name;
      this.age = age;
  }
  greet () {
      return `Hello my name is ${this.name} and I am ${this.age}`;
  }
}

const person1 = new Person('John', 25);
const person2 = new Person('Sarah', 32);

console.log(person1.name, person1.age);
console.log(person2.name, person2.age);

console.log(person1.greet());
console.log(person2.greet());