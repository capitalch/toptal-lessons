'use strict'
let cnt = 0;
let lastCarry = 0;
function solution(a, b) {
    let as = a.toString();
    let bs = b.toString();
    let aArr = as.split('').reverse();
    let bArr = bs.split('').reverse();
    let lenA = aArr.length - 1;
    let lenB = bArr.length - 1;
    const len = Math.max(lenA, lenB);
    for (let i = 0; i <= len; i++) {
        let valA = parseInt(aArr[i]) || 0;
        let valB = parseInt(bArr[i]) || 0;
        let val = valA + valB + lastCarry;
        if (val > 9) {
            cnt++;
            lastCarry = 1;
        } else {
            lastCarry = 0;
        }
    }
    return (cnt);
}
const a = 19, b = 92;

const ret = solution(a, b);
console.log(ret);
module.exports = {
    solution: solution
}