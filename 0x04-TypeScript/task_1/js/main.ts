// 1. The Teacher interface
interface Teacher {
  readonly firstName: string;   // only modifiable at initialization
  readonly lastName: string;    // only modifiable at initialization
  fullTimeEmployee: boolean;    // required
  yearsOfExperience?: number;   // optional
  location: string;             // required
  [key: string]: any;           // allows extra attributes
}

// 2. Director interface extends Teacher
interface Director extends Teacher {
  numberOfReports: number;
}

// Example Director object
const director1: Director = {
  firstName: 'Opeyemi',
  lastName: 'Ajibade',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,     // extra attribute allowed
  numberOfReports: 500,
};

console.log(director1);

// Define the function interface (signature)
interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implement the function (must match the interface)
const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Example usage
console.log(printTeacher("Opeyemi", "Ajibade")); // O. Ajibade
