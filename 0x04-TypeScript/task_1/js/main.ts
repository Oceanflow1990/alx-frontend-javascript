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

// Define the interface for the function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implement the function
const printTeacher: printTeacherFunction = function(firstName: string, lastName: string): string {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Test the function
console.log(printTeacher("John", "Doe")); // Should print "J. Doe"