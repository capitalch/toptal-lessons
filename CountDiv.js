function modulus(a, b) {
    const q = parseInt(a / b);
    const p = q * b;
    return(a - p);
}

function countDiv(A, B, K) {
    let counter = 0;
    for (let i = A; i <= B; i++) {
        ((modulus(i,K)) === 0) && (counter++);
    }
    return counter;
}
const A = 3, B = 10, K = 2;
const ret = countDiv(A, B, K);
console.log(ret);