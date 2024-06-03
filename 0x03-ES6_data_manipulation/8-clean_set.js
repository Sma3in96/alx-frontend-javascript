export default function cleanSet(set, startString) {
  if (!startString) {
    return '';
  } else if (set instanceof Set) {
    const result = [];
    set.forEach((element) => {
      if (element.startsWith(startString)) {
        result.push(element.substring(startString.length));
      }
    });

    return result.join('-');
  } else {
    return '';
  }
}
