let highScore: number | boolean;

highScore = 1;

highScore = false;

// -------

const stuff: number[] | string[] = [];

// -------

type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

// -------

type SkiSchoolStudent = {
  name: string;
  age: number;
  sport: "ski" | "snowboard";
  level: SkillLevel;
};

// -------

type RGB = {
  r: number;
  g: number;
  b: number;
};

type HSL = {
  h: number;
  g: number;
  b: number;
};

const colorsNew: (RGB | HSL)[] = [
  { r: 255, g: 0, b: 0 },
  { h: 120, g: 100, b: 50 },
];

// -------
const greetNew = (person: string | string[]): void => {
  if (typeof person === "string") {
    console.log(`Hello, ${person}`);
  } else {
    person.map((p) => console.log(`Hello, ${p}`));
  }
};

greetNew("Alpy");
greetNew(["Alpy", "Endo"]);
