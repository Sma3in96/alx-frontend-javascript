export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new Error('Name must be a string');
    }
    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw new Error('Length must be a number');
    }
    if (Array.isArray(students)) {
      for (const student of students) {
        if (typeof student !== 'string') {
          throw new Error('Students must be a array of strings');
        }
      }
      this._students = students;
    } else {
      throw new Error('Students must be a array');
    }
  }
}
