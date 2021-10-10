interface Human {
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: "Nicolas",
  age: 22,
  gender: "male"
};

// gender? 와 같이 ?를 붙이면 선택적인 파라미터.
const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender} !!`;
}

console.log(sayHi(person));

export {};