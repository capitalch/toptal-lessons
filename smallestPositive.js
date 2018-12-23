function smallest(A) {
    let ret = 0;
    const len = A.length;
    let A1 = [];
    for (let i = 0; i < len; i++) {
        if (A[i] >= 0) {
            A1.push(A[i]);
        }
    }
    A1 = A1.sort((a, b) => a - b);
    const len1 = A1.length;
    if (len1 == 0) {
        ret = 1;
        return (ret);
    } else if (len1 === 1) {
        if (A1[0] == 1) {
            ret = 2;
        } else {
            ret = 1;
        }
        return (ret);
    }
    for (let i = 1; i < len1; i++) {
        if ((A1[i] - A1[i - 1]) > 1) {
            return (A1[i-1] + 1);

        }
    }
    return A1[len1 - 1] + 1;
}
const A = [0, 1, 3, 10,6, 5, 4, 3, 2, 4];
const ret = smallest(A);
console.log(ret);
