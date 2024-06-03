export default function hasValueFromArray(set, array) {
  return array.reduce((bool, ele) => bool && set.has(ele), true);
}
