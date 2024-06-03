export default function getStudentIdsSum(array) {
  if (array instanceof Array) {
    return array.reduce((count, item) => count + item.id, 0);
  }
}
