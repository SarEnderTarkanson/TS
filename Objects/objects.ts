function printName(person: { first: string; last: string }): void {
  console.log(`${person.first} ${person.last}`);
}

printName({ first: "Alpy", last: "Tarkanson" });

let coordinate: { x: number; y: number } = { x: 36, y: 42 };

function randomCoordinate(): { x: number; y: number } {
  return { x: Math.random(), y: Math.random() };
}

printName({ first: "Mick", last: "Jagger" }); //TypeScript displaying no error, as expected

printName({ first: "Mick", last: "Jagger", age: 47 }); // TypeScript displaying error, again as expected

const singer = { first: "Mick", last: "Jagger", age: 47 };

printName(singer); //TypeScript not displaying any error, which is unexpected, cos it actually should
