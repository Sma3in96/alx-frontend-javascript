export default function getStudentByLocation(array, location) {
  if (array instanceof Array) {
    return array.filter(student => student.location === location);
  }
  throw new Error("please provide an array")
}
