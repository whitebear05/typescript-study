// 인터페이스(interface)를 사용하면 ts 측면에서 좀 더 안전하지만,
// react, node, express를 사용한다면 코드에서 클래스를 사용해야 한다.

class Human {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const lynn = new Human("Lynn", 18, "female")

// gender? 와 같이 ?를 붙이면 선택적인 파라미터.
const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender} !!`;
}

console.log(sayHi(lynn));

export {};