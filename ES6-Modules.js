//MODULES

// file 1 (file1.js)
export const name = 'jeff';
export const nums = [1,2,3];

export default class Person {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
    greet () {
        return `Hello my name is ${this.name} and I am ${this.age}`;
    }
  }

// file 2 (file2.js)

import { name, nums } from './file1';

console.log(name, nums);

import Person from './file1'