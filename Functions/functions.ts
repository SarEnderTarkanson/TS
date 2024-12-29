function square(num: number): number {
  return num * num;
}

console.log(square(3));

function greet(person: string): string {
  return `Hi there, ${person}!`;
}
let person = "Alpy";
console.log(greet(person));

const doSomething = (person: string, age: number, isFunny: boolean) => {};

doSomething("ChickenFace", 39, true);

const add = (x: number, y: number): number => {
  return x + y;
};

// function rando(num:number) {
//     if (Math.random() < 0.5){
//         return num.toString()
//     }
//     return num;
// }

const colors = ["red", "orange", "yellow"];

colors.map((color) :string => {
    return color.toUpperCase()
});
