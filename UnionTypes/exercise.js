var highScore;
highScore = 1;
highScore = false;
// -------
var stuff = [];
var colorsNew = [
    { r: 255, g: 0, b: 0 },
    { h: 120, g: 100, b: 50 },
];
// -------
var greetNew = function (person) {
    if (typeof person === "string") {
        console.log("Hello, ".concat(person));
    }
    else {
        person.map(function (p) { return console.log("Hello, ".concat(p)); });
    }
};
greetNew("Alpy");
greetNew(["Alpy", "Endo"]);
