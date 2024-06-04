export const weakMap = new WeakMap();
export function queryAPI(object) {
  if (object instanceof Object && object.protocol !== undefined && object.name !== undefined) {
    const count = weakMap.get(object) || 0;

    if (count >= 5) {
      throw new Error('Endpoint load is high');
    }

    weakMap.set(object, count + 1);
  } else {
    throw new Error('Object is not an API object');
  }
}
