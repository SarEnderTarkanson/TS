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
