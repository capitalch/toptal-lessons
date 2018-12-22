function missingInt(A) {
    const sortedArr = A.sort((a, b) => a - b);
    const len = A.length;
    let ret = 0;
    if(len === 0){
        return 1;
    } else if (len === 1){
        if(A[0] === 1){
            return 2;
        } else{
            return 1;
        }
    }
    for (let i = 0; i < len; i++) {
        if (i === 0) {
            if (A[i] != 1) {
                ret = 1;
                break;
            }
        } else {
            if (A[i] - A[i - 1] > 1) {
                ret = A[i] - 1;
                break;
            } 
        } 
        if(i === (len-1)){
            ret = A[i] + 1;
        }
    }
    return ret;
}
const A = [2,1,4,3]
const ret = missingInt(A);
console.log(ret);