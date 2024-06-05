var teacher = {
    firstName: "John",
    lastName: "Doe",
    fullTimeEmployee: true,
    yearsOfExperience: 10,
    contract: false,
    location: "London",
};
console.log(teacher);
var director = {
    firstName: "John",
    lastName: "Doe",
    fullTimeEmployee: true,
    yearsOfExperience: 10,
    contract: false,
    location: "London",
    numberOfReports: 10,
};
console.log(director);
function printTeacher(firstName, lastName) {
    return firstName.substring(0, 1) + '.' + lastName;
}
var StudentClass = /** @class */ (function () {
    function StudentClass(student) {
        this.firstName = student.firstName;
        this.lastName = student.lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return "Currently working";
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
var student = {
    firstName: "Sma",
    lastName: "Oum",
};
var newStudent = new StudentClass(student);
console.log(newStudent.displayName());
console.log(newStudent.workOnHomework());
newStudent.age = 15;
console.log(newStudent);
