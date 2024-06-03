export default function createInt8TypedArray(lenght, position, value) {
  if (position < lenght) {
    const array = new Int8Array(lenght);
    array[position] = value;
    return array;
  }
  throw new Error('Position outside range');
}
