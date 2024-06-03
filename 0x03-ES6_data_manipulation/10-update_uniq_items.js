export default function updateUniqueItems(map) {
  if (map instanceof Map) {
    throw new Error('Cannot update');
  }
  const iterator = map.keys();
  let ind = 0;
  while (ind < map.size) {
    const index = iterator.next().value;
    if (map.get(index) === 1) {
      map.set(index, 100);
    } else {
      map.set(index, map.get(index));
    }
    ind += 1;
  }
}
