'use strict'
function solution(A) {
    const len = A.length;
    const map = new Map();
    for (let i = 0; i < len; i++) {
        if(map.has(A[i])){
            let val = map.get(A[i]);
            val++;
            map.set(A[i],val);
        } else{
            map.set(A[i],1)
        }
    }
    const max = Math.max(...map.values());
    for(let key of map.keys()){
        if(map.get(key) === max){
            return key;
        }
    }
    console.log(...map.values());
}
let A = [1, 3, 2, 3, 4];
const set = new Set(A);
const a1 = Array.from(...set);
console.log(...set);
const ret = solution(A);
console.log(ret);
module.exports = {
    solution: solution
}