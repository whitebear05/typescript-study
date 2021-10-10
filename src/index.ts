const name = "Nicolas",
  age = 24,
  gender = "male";


// gender? 와 같이 ?를 붙이면 선택적인 파라미터.
const sayHi = (name: string, age: number, gender: string): string => {
  return `Hello ${name}, you are ${age}, you are a ${gender} !!`;
}

console.log(sayHi(name, age, gender));

export {};