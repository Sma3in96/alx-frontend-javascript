export default function createIteratorObject(report) {
  const iterator = [];
  Object.keys(report.allEmployees).forEach((element) => {
    iterator.push(...report.allEmployees[element]);
  });
  return iterator;
}
