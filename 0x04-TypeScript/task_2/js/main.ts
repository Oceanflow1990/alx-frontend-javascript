interface DirectorInterface {
    workFromHome() : string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome() : string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface {
    workFromHome(): string {
       return "Working from home";
    }

    getCoffeeBreak(): string {
       return "Getting a coffee break";
    }

    workDirectorTasks(): string {
       return "Getting to director tasks";
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home";
    }

    getCoffeeBreak(): string {
        return "Cannot have a break";
    }

    workTeacherTasks(): string {
        return "Getting to work";
    }
}

function createEmployee(salary: number | string): Director | Teacher {
  if (salary < 500) {          // 👈 must be exactly like this
    return new Teacher();
  }
  return new Director();
}

console.log(createEmployee(200) instanceof Teacher ? "Teacher" : "Director"); // Teacher
console.log(createEmployee(1000) instanceof Teacher ? "Teacher" : "Director"); // Director
console.log(createEmployee("$500") instanceof Teacher ? "Teacher" : "Director"); // Director


type Subjects = "Math" | "History";


function teachClass (todayClass: Subjects) : string {

        if(todayClass === "Math") {
            return "Teaching Math";
        }
        else{
            return "Teaching History";
        }
}