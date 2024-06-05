interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

const teacher: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  yearsOfExperience: 10,
  contract: false,
  location: "London",
}

console.log(teacher);

interface Directors extends Teacher {
  numberOfReports: number;
}

const director: Directors = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  yearsOfExperience: 10,
  contract: false,
  location: "London",
  numberOfReports: 10,
}

console.log(director);

function printTeacher(firstName: string, lastName: string) : string {
  return firstName.substring(0,1) + '.' + lastName;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

interface Student {
  firstName: string;
  lastName: string;
  [propName: string]: any;
}

interface StudentConstructor {
  firstName: string;
  lastName: string;
}

class StudentClass implements Student {
  [propName: string]: any;
  firstName: string;
  lastName: string;

  constructor(student: StudentConstructor) {
    this.firstName = student.firstName;
    this.lastName = student.lastName;
  }

  workOnHomework() : string {
    return "Currently working";
  }

  displayName() : string {
    return this.firstName;
  }

}

const student: StudentConstructor = {
  firstName: "Sma",
  lastName: "Oum",
}

const newStudent = new StudentClass(student);

console.log(newStudent.displayName());
console.log(newStudent.workOnHomework());
newStudent.age = 15;
console.log(newStudent);
