// interface Teacher {
//   readonly firstName: string;
//   readonly lastName: string;
//   fullTimeEmployee: boolean;
//   yearsOfExperience?: number;
//   location: string;
//   [propName: string]: any;
// }

// const teacher: Teacher = {
//   firstName: "John",
//   lastName: "Doe",
//   fullTimeEmployee: true,
//   yearsOfExperience: 10,
//   contract: false,
//   location: "London",
// }

// console.log(teacher);

// interface Directors extends Teacher {
//   numberOfReports: number;
// }

// const director: Directors = {
//   firstName: "John",
//   lastName: "Doe",
//   fullTimeEmployee: true,
//   yearsOfExperience: 10,
//   contract: false,
//   location: "London",
//   numberOfReports: 10,
// }

// console.log(director);

// function printTeacher(firstName: string, lastName: string) : string {
//   return firstName.substring(0,1) + '.' + lastName;
// }

// interface printTeacherFunction {
//   (firstName: string, lastName: string): string;
// }

// interface Student {
//   firstName: string;
//   lastName: string;
//   [propName: string]: any;
// }

// interface StudentConstructor {
//   firstName: string;
//   lastName: string;
// }

// class StudentClass implements Student {
//   [propName: string]: any;
//   firstName: string;
//   lastName: string;

//   constructor(student: StudentConstructor) {
//     this.firstName = student.firstName;
//     this.lastName = student.lastName;
//   }

//   workOnHomework() : string {
//     return "Currently working";
//   }

//   displayName() : string {
//     return this.firstName;
//   }

// }

// const student: StudentConstructor = {
//   firstName: "Sma",
//   lastName: "Oum",
// }

// const newStudent = new StudentClass(student);

// console.log(newStudent.displayName());
// console.log(newStudent.workOnHomework());
// newStudent.age = 15;
// console.log(newStudent);

interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreake(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreake(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Work from Home';
  }
  getCoffeeBreake(): string {
    return 'Getting a coffee break';
  }
  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
  
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Work from Home';
  }
  getCoffeeBreake(): string {
    return 'Getting a coffee break';
  }
  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

function createEmployee(salary: number | string) {
  let sal: number;
  if (typeof salary === 'string') {
    sal = parseInt(salary.replace(/[^0-9.-]/g, ''));
  } else {
    sal = salary;
  }

  if (sal < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

console.log(createEmployee(200).workFromHome);
console.log(createEmployee(1000).getCoffeeBreake);
console.log(createEmployee('$500'));

function isDirector(employee: Teacher | Director) : boolean {
  if (employee instanceof Teacher) {
    return false;
  } else {
    return true;
  }
}

function executework(employee: Director | Teacher) : string {
  if (isDirector(employee)) {
    return (employee as Director).workDirectorTasks();
  } else {
    return (employee as Teacher).workTeacherTasks();
  }
}

console.log(executework(createEmployee('$200')));
console.log(executework(createEmployee(1000)));

type Subjects = "Math" | "History"

function teachClass(todayClass: Subjects) {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else {
    return 'Teaching History';
  }
}
