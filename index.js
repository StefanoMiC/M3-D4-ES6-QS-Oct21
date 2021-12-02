// DEFAULT PARAMETERS

const multiply = (n1 = 1, n2 = 1) => n1 * n2;

console.log(multiply(2, 3));
console.log(multiply(2, 5));
console.log(multiply(2, 3));

const search = (query = "nature") => {
  console.log("http://pexels.com/api/v1/" + query);
};
search();
search("cats");

// REST PARAMETERS

const withRestParams = (param1, param2, param3, ...rest) => {
  console.log(param1);
  console.log(param2);
  console.log(param3);
  console.log(rest);
};

withRestParams(1, 2, 3, 4, 5, 6, 7);

// TERNARY OPERATOR

let studName = "John";

let isAdmitted = false;

if (studName === "John") {
  isAdmitted = true;
} else {
  isAdmitte = false;
}

console.log(isAdmitted);
const isAdmitted2 = studName === "John" ? true : false;
console.log(isAdmitted2);

// DESTRUCTURING

const obj = {
  name: "Alex",
  specialty: "sidekick",
  location: { area: { country: "Italy" } },
};

// const name = obj.name;
// const specialty =  obj.specialty
// const country = obj.location.area.country

const {
  name,
  specialty,
  location: {
    area: { country },
  },
} = obj;

console.log(name);
console.log(specialty);
console.log(country);

// DESTRUCTURING FUNCTION PARAMETERS

const person = ({
  name,
  lastName,
  location: {
    area: { country },
  },
}) => {
  console.log(name);
  console.log(lastName);
  // console.log(param.location.area.country)
  console.log(country);
};

const personObj = {
  name: "Stefano",
  lastName: "Miceli",
  location: { area: { country: "Italy" } },
};

person(personObj);

// DESTRUCTURING FOR ARRAYS
const randomArr = ["a", "b", "c", "d", "e"];

// const third = randomArr[2]

// const [first, second, third, fourth, fifth] = randomArr;

// console.log(first);

const [, , , x, ...rest] = randomArr;
console.log(x);
console.log(rest);

// SPREAD OPERATOR
// FOR OBJS
const student = {
  name: "Davide",
  kudos: 500,
  planet: "Earth",
};

const student2 = {
  name: "Roberta",
  kudos: 1000,
};

const student3 = {
  name: "Hilina",
  kudos: 1001,
  street: "Washington st.",
};

// const student4 = Object.assign({}, student, student3, {name: "Stefano"})
const student4 = {
  ...student,
  ...student3,
  name: "Stefano",
};
const student5 = { ...student, planet: "Mars" };
// delete student4.kudos;
console.log(student4);

// FOR ARRAYS
const newArrayCopied = [...randomArr];
console.log(newArrayCopied);

const sentence = ["this", "is", "so", "cool"];

console.log(...sentence);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, 3, 4, 5, ...arr2, 3, 5];

console.log(arr3);

// FOR STRINGS
const word = "We are at Strive School";

console.log(...word);
console.log([...word].join(""));

// FACTORY FUNCTIONS

// function factory(name, surname) {
//   return { name: name, surname: surname };
// }
function factory(name, surname) {
  return { name, surname };
}

console.log(factory("stefano", "miceli"));

// CONSTRUCTOR FUNCTIONS
function Person(name, age) {
  this.name = name;
  this.age = age;

  console.log(this);
}

//ARROW FUNCTIONS CANNOT BE USED AS CONSTRUCTORS
// const Person = (name, age) => {
//   this.name = name;
//   this.age = age;

//   console.log(this);
// }

const tutor = new Person("Stefano", 32);
const tutor2 = new Person("Diego", 35);
console.log(tutor2);

const myObject = {
  name: "John",
  jobs: ["freelance", "teacher", "UX designer", "JS developer"],
  myMethod: function () {
    console.log("OUTER OBJ", this);
    // const newFunc = () => {
    //   //  inherited by the lexical context ( aka parent element )
    //   console.log(this);
    // };
    // newFunc();
    // this.jobs.forEach(function (str) {
    //   console.log(this);
    //   console.log(`${this.name} is a ${str}`);
    // });
    // this.jobs.forEach((str) => {
    //   console.log(str);
    //   console.log(`${this.name} is a ${str}`);
    // });

    setTimeout(function () {
      console.log("GLOBAL OBJ", this);
    }, 1000);
    setTimeout(() => {
      console.log("INNER THIS", this);
    }, 1000);
  },
};

const myObject2 = {
  name: "John",
  myMethod: () => {
    console.log(this);
  },
};

myObject.myMethod();
myObject2.myMethod();

// flat method

const nestedArray = [[1, 2], 3, [4, [5]]];
console.log(nestedArray.flat(Infinity));

// indexOf

const letters = ["a", "b", "e", "e", "e", "c", "d", "e", "f"];
console.log(letters.indexOf("e"));

const uniqueWithFilter = letters.filter(
  (elem, index, array) => array.indexOf(elem) === index
);
const uniqueWithSet = [...new Set(letters)];
console.log(uniqueWithSet);

// const reducer = (acc, curr) => acc.includes(curr) ? acc : acc.concat(curr)
const reducer = (acc, curr) => (acc.includes(curr) ? acc : [...acc, curr]);
const uniqueWithReduce = letters.reduce(reducer, []);

console.log(uniqueWithReduce);
