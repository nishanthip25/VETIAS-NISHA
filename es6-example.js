
// let
let studentCount = 10;
studentCount = 11;
console.log("Student Count:", studentCount);

// const
const collegeName = "VETIAS";
console.log("College Name:", collegeName);

// template literals
let studentName = "Arun";
console.log(`Welcome ${studentName} to ${collegeName}`);

// object
const student = {
    name: "Arun",
    age: 18,
    department: "CSA"
};

// destructuring
const { name, age, department } = student;

console.log("Name:", name);
console.log("Age:", age);
console.log("Department:", department);

// arrow function
const displayStudent = () => {
    console.log("Arun");
    console.log("Priya");
    console.log("Deva");
};

displayStudent();

//spread operator

const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];

const allNumbers = [...numbers1, ...numbers2];

console.log(allNumbers);

//rest operator

function displayStudents(...students) {
    console.log(students);
}

displayStudents("Arun", "Priya", "Deva");