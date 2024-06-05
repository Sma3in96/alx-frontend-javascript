"use strict";
/// <reference path="./subjects/Cpp.ts"/>
/// <reference path="./subjects/Java.ts"/>
/// <reference path="./subjects/React.ts"/>
/// <reference path="./subjects/Teacher.ts"/>
Object.defineProperty(exports, "__esModule", { value: true });
exports.cTeacher = exports.java = exports.react = exports.ccp = void 0;
exports.ccp = new Subjects.Cpp();
exports.react = new Subjects.React();
exports.java = new Subjects.Java();
exports.cTeacher = {
    experienceTeachingC: 10,
    firstName: 'ziko',
    lastName: 'haha'
};
console.log("C++", exports.ccp.getRequirements());
exports.ccp.setTeacher(exports.cTeacher);
console.log(exports.ccp.getAvailableTeacher());
console.log("React", exports.react.getRequirements());
console.log("Java", exports.java.getRequirements());
exports.react.setTeacher(exports.cTeacher);
console.log(exports.react.getAvailableTeacher());
exports.java.setTeacher(exports.cTeacher);
console.log(exports.java.getAvailableTeacher());
