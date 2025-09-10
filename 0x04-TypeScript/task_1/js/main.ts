// 1. The Teacher interface
interface Teacher {
  readonly firstName: string;   // only modifiable at initialization
  readonly lastName: string;    // only modifiable at initialization
  fullTimeEmployee: boolean;    // required
  yearsOfExperience?: number;   // optional
  location: string;             // required
  [key: string]: any;           // allows extra attributes
}

interface Director extends Teacher {
  numberOfReports: number;
};

const director1: Director = {
  firstName: 'Opeyemi',
  lastName: 'Ajibade', // fixed typo here ✅
  fullTimeEmployee: false,
  location: 'London',
  contract: false,     // extra attribute allowed
  numberOfReports: 500,
};

console.log(director1);

// Define the function interface
interface printTeacherFunction {
  ({ firstName, lastName }: { firstName: string; lastName: string }): string;
}

const printTeacher: printTeacherFunction = ({ firstName, lastName }) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

console.log(printTeacher({ firstName: "John", lastName: "Doe" })); // J. Doe
console.log(printTeacher({ firstName: "Opeyemi", lastName: "Ajibade" })); // O. Ajibade