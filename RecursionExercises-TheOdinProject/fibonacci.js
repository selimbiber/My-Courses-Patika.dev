const fibIterative = (n) => {
    const RESULT = [0, 1];

    while (RESULT.length < n) {
        RESULT.push(RESULT[RESULT.length - 2] + RESULT[RESULT.length -1]);
    }

    return RESULT;
}

console.log(fibIterative(7));

const fibRecursive = (n, a = [0, 1]) => {
    if (a.length >= n) return a;
    return fibRecursive(n, [...a, a[a.length - 2] + a[a.length - 1]]);
}

console.log(fibRecursive(7));