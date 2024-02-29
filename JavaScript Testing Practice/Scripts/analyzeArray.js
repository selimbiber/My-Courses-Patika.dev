export default function analyzeArray(array) {
  return {
    average: getAverage(array),
    min: getMin(array),
    max: getMax(array),
    length: getLength(array),
  };
}

function getAverage(array) {
  return Math.ceil(array.reduce((a, b) => a + b, 0) / array.length);
}

function getMin(array) {
  return Math.min(...array);
}

function getMax(array) {
  return Math.max(...array);
}

function getLength(array) {
  return array.length;
}
