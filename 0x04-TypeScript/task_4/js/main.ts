


export const ccp = new Subjects.Cpp();

export const react = new Subjects.React();

export const java = new Subjects.Java();

export const cTeacher : Subjects.Teacher = {
  experienceTeachingC: 10,
  firstName: 'ziko',
  lastName: 'haha'
};

console.log("C++", ccp.getRequirements());
ccp.setTeacher(cTeacher);
console.log(ccp.getAvailableTeacher());

console.log("React", react.getRequirements());

console.log("Java", java.getRequirements());

react.setTeacher(cTeacher);

console.log(react.getAvailableTeacher());

java.setTeacher(cTeacher);

console.log(java.getAvailableTeacher());

