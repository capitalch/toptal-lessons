function sumR(i, arr) {
    let res = 0;
    for (let j = i + 1; j < arr.length; j++) {
        res = res + arr[j];
    }
    return res;
}

function sumL(i, arr) {
    let res = 0;
    for (let j = 0; j < i; j++) {
        res = res + arr[j];
    }
    return res;
}

const arr = [1, 2, 3, 4, 3, 2, 1];
const max = arr.length - 1;
for (let i = 0; i <= max; i++) {
    const valL = sumL(i, arr);
    const valR = sumR(i, arr);
    if (valL === valR) {
        console.log(i);
    }
}
console.log(-1);
