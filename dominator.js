function solution(A) {
    const len = A.length;
    const my = {};
    for (let i = 0; i < len; i++) {
        const val = A[i];
        if (my[val] == undefined) {
            my[val] = {
                count:1,
                index : [i]
            }
        } else {
            my[val].count++;
            my[val].index.push(i);
        }
    }
    const half = Math.floor(len / 2) + 1;
    const arr = Object.keys(my);
    const len1 = arr.length;
    for(let i = 0;i< len1;i++){
        const key = arr[i];
        if(my[key].count >= half){
            return my[key].index[0];
        }
    }
    return -1;
}
const A = [1, 2, 2, 2, 2, 4, 3];
const ret = solution(A);
console.log(ret);