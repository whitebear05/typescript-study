"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person = {
    name: "Nicolas",
    age: 22,
    gender: "male"
};
// gender? 와 같이 ?를 붙이면 선택적인 파라미터.
const sayHi = (person) => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender} !!`;
};
console.log(sayHi(person));
//# sourceMappingURL=index.js.map