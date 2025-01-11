function printName(person: { first: string; last: string }): void {
  console.log(`${person.first} ${person.last}`);
}

printName({ first: "Alpy", last: "Tarkanson" });

let coordinate: { x: number; y: number } = { x: 36, y: 42 };

function randomCoordinate(): { x: number; y: number } {
  return { x: Math.random(), y: Math.random() };
}
