let age: number | string = 21;
age += 23;
age = "24";

type Point3 = {
  x: number;
  y: number;
};

type Loc = {
  lat: number;
  long: number;
};

let coordinates: Point3 | Loc = { x: 1, y: 34 };
coordinates = { lat: 321.213, long: 23.334 };

function printAge(age: number | string): void {
  console.log(`You are ${age} years old.`);
}

printAge(23);
printAge("87");

function calculateTax(price: number | string, tax: number) {
  if (typeof price === "string") {
    price = parseFloat(price.replace("$", ""));
  }
  return price * tax;
}

// const nums:number[] = [1,2,3,4]

// const stuff:any[] = [1,2,3,4, true, {}, "asd"]

// const stuff: (number | string)[] = [5, "asd"]

// const stuff2: number[] | string[] =[5, ""]

const coords2: (Point3 | Loc)[] = [];

coords2.push({ lat: 321.213, long: 23.334 });
coords2.push({ x: 234, y: 234 });

//Literal Types

let zero: 0 = 0;

let mood: "Happy" | "Sad" = "Happy";

mood = "Sad";

type DayOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

let today: DayOfWeek = "Friday";
