export default function createInt8TypedArray(lenght, position, value) {
  if (position < lenght) {
    const array = new ArrayBuffer(lenght);
    const dataview = new DataView(array);
    dataview.setInt8(position, value);
    return dataview;
  }
  throw new Error('Position outside range');
}
