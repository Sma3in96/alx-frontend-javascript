export default function updateStudentGradeByCity(array, city, newGrades) {
  if (array instanceof Array) {
    const newarray = array.filter(ele => ele.location === city)
    return newarray.map((ele) => {
      return {
        ...ele,
        grade: newGrades.filter(grade => grade.studentId === ele.id).map(ele => ele.grade)[0] || 'N/A',
      };
    });
  }
  return null;
}
