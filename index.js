// const someNums = [10, 20, 30, 40];

// const reverseSomeNums = someNums.reverse();

// console.log("reverse someNums", reverseSomeNums);
// console.log("someNums", someNums);
// console.log(reverseSomeNums === someNums);

const dog = {
  name: "Fido",
  toys: [
    { name: "bone", cost: 6 },
    { name: "ball", cost: 4 },
    { name: "squeaky toy", cost: 8 },
  ],
};

// console.log("stringifyed Object", JSON.stringify(dog))

// Create deep copy
// const newFido = JSON.parse(JSON.stringify(dog));
const newFido = structuredClone(dog) // !!!!

// Create Shallow copy
// Will give same output:
// const newFido = {...dog}
newFido.name = "Fido Jr.";

// newFido.toys = [...newFido.toys];
  newFido.toys[0].name = "Super-sized bone";
// newFido.toys[0] = { ...newFido.toys[0], name: "Super-sized bone" };

console.log("Original dog");
console.log(dog);

console.log("=========");
console.log("new dog");
console.log(newFido);
