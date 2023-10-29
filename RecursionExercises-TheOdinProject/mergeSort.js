function mergeSort(a) {
    if (a.length === 1) return a;
    const MIDDLE = Math.trunc(a.length / 2);
    const LEFT = mergeSort(a.slice(0, MIDDLE));
    const RIGHT = mergeSort(a.slice(MIDDLE));
    const RESULT = [];
  
    ((l, r) => {
      let i = 0,
        j = 0;
  
      while (i < l.length && j < r.length) {
        l[i] < r[j] ? RESULT.push(l[i++]) : RESULT.push(r[j++]);
      }
      while (i < l.length) RESULT.push(l[i++]);
      while (j < r.length) RESULT.push(r[j++]);
    })(LEFT, RIGHT);
  
    return RESULT;
}

const RANDOM = Array.from({ length: 50 }, () =>
  Math.floor(Math.random() * 100)
);

console.log(mergeSort(RANDOM));