const name = "Nicolas",
  age = 24,
  gender = "male";


// gender? 와 같이 ?를 붙이면 선택적인 파라미터.
const sayHi = (name, age, gender?) => {
  console.log(`Hello ${name}, you are ${age}, you are a ${gender} :)`);
}

sayHi(name, age);

export {};