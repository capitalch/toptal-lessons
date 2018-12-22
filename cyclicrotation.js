function rotate(A, K) {
    if ((!A) || (A.length === 0 || (K === 0))) {
        return A;
    }
    let x = 0;
    for (let i = 0; i < K; i++) {
        x = A.pop();
        A.unshift(x);
    }
    return A;
}

const A = []
rotate(A, 3);
console.log(A);