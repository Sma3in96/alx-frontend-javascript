export const weakMap = new WeakMap();
export function queryAPI(object) {
  const count = weakMap.get(object) || 0;

  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }

  weakMap.set(object, count + 1);
}
