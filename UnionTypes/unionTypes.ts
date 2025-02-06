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
    price.replace("$", "");
  } else {
    price * tax;
  }
}
