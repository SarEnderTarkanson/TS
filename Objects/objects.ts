// function printName(person: { first: string; last: string }): void {
//   console.log(`${person.first} ${person.last}`);
// }

// printName({ first: "Alpy", last: "Tarkanson" });

// let coordinate: { x: number; y: number } = { x: 36, y: 42 };

// function randomCoordinate(): { x: number; y: number } {
//   return { x: Math.random(), y: Math.random() };
// }

// printName({ first: "Mick", last: "Jagger" }); //TypeScript displaying no error, as expected

// printName({ first: "Mick", last: "Jagger", age: 47 }); // TypeScript displaying error, again as expected

// const singer = { first: "Mick", last: "Jagger", age: 47 };

// printName(singer); //TypeScript not displaying any error, which is unexpected, cos it actually should

// type Point= {
//   x:number;
//   y: number;
// }

// let coordinate: Point = { x: 36, y: 42 };

// function randomCoordinate(): Point {
//   return { x: Math.random(), y: Math.random() };
// }

// randomCoordinate()

type Song = {
  title: string;
  artist: string;
  numStreams: number;
  credits: {
    producer: string;
    writer: string;
  };
};

function calculatePayout(song: Song): number {
  return song.numStreams * 0.003;
}

function printSong(song: Song): void {
  console.log(`${song.title} - ${song.artist}`);
}

type Point = {
  x: number;
  y: number;
  z?: number;
};

const myPoint: Point = { x: 1, y: 3 };

type User = {
  readonly id: number;
  username: string;
};

const user: User = { id: 12867, username: "SarEnderTarkanson" };

console.log(user)

user.id = 3456643