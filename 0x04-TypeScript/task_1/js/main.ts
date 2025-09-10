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

/// Define the function interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implement using parameter destructuring
function printTeacher({ firstName, lastName }: { firstName: string; lastName: string }): string {
  return `${firstName}. ${lastName}`;
}

// Example usage
console.log(printTeacher({ firstName: "Opeyemi", lastName: "Ajibade" })); // J. Doe

// Interface to describe the constructor
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Interface to describe the class
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Class implementing the interface
class StudentClass implements StudentClassInterface {
  constructor(public firstName: string, public lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const student = new StudentClass("Opeyemi", "Ajibade");
console.log(student.displayName()); // Opeyemi
console.log(student.workOnHomework()); // Currently working
