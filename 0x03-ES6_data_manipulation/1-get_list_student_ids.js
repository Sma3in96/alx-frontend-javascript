export default function getListStudentIds(array) {
  if (array instanceof Array) {
    const studentsIds = array.map((ele) => ele.id);
    return studentsIds;
  }
  return [];
}
