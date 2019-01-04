'use strict'
function solution(id) {
    if (id.length == 1) {
        return parseInt(id[0]);
    }
    const arr = id.split('');
    const val = arr.reduce((p, v) => { return (p + parseInt(v)) }, 0)
    if (val <= 9) {
        return (val)
    } else {
        solution(val.toString());
    }
}

const id = '5'
const ret = solution(id);
console.log(ret);

module.exports = {
    solution: solution
}