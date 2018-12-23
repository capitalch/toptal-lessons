function frogRiverOne(X, A) {
    let ret = -1;
    let A2 = [];
    let A3 = [];
    const len = A.length;
    //create A2
    for (let i = 0; i < len; i++) {
        const val = A[i];
        if (A2[val] == undefined) {
            A2[val] = i;
        } else {
            if (A2[val] > i) {
                A2[val] = i;
            }
        }
    }
    A2[0] = 0;
    //Check A2 continuity and create A3
    for (let i = 0; i <= X; i++) {
        if (A2[i] == undefined) {
            return (ret);
        } else {
            A3[i] = A2[i];
        }
    }
    // get max of A3
    ret = Math.max(...A3);
    return ret;
}

const A = [1, 3, 6, 4, 2, 3, 5, 7];
const X = 8;
const res = frogRiverOne(X, A);
console.log(res);