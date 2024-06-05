// interface Teacher {
//   readonly firstName: string;
//   readonly lastName: string;
//   fullTimeEmployee: boolean;
//   yearsOfExperience?: number;
//   location: string;
//   [propName: string]: any;
// }
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return 'Work from Home';
    };
    Director.prototype.getCoffeeBreake = function () {
        return 'Getting a coffee break';
    };
    Director.prototype.workDirectorTasks = function () {
        return 'Getting to director tasks';
    };
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return 'Work from Home';
    };
    Teacher.prototype.getCoffeeBreake = function () {
        return 'Getting a coffee break';
    };
    Teacher.prototype.workTeacherTasks = function () {
        return 'Getting to work';
    };
    return Teacher;
}());
function createEmployee(salary) {
    var sal;
    if (typeof salary === 'string') {
        sal = parseInt(salary.replace(/[^0-9.-]/g, ''));
    }
    else {
        sal = salary;
    }
    if (sal < 500) {
        return new Teacher();
    }
    else {
        return new Director();
    }
}
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));
function isDirector(employee) {
    if (employee instanceof Teacher) {
        return false;
    }
    else {
        return true;
    }
}
function executework(employee) {
    if (isDirector(employee)) {
        employee.workDirectorTasks();
    }
    else {
        employee.workTeacherTasks();
    }
}
