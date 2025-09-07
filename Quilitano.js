const sectionA = ["Anna", "Brian", "Charlie"];
const sectionB = ["Diana", "Ethan"];

const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
  owner: {
    name: "Alex",
    age: 30,
  },
};

const { brand, model } = car;

const { name: ownerName, age: ownerAge } = car.owner;

const allStudents = [...sectionA, ...sectionB, "Faith"];

const grades = [75, 80, 90];

const updatedGrades = grades.map(grade => grade + 5);

console.log(`All Students: [${allStudents.join(", ")}]`);
console.log(`Car: ${brand} ${model} (${car.year})`);
console.log(`Owner: ${ownerName}, Age: ${ownerAge}`);
console.log(`Updated Grades: [${updatedGrades.join(", ")}]`);

