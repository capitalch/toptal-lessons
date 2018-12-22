function oddOccur(A) {
    const len = A.length;
    const arrObj = {};
    for(let i=0;i<len;i++){
        if(arrObj[A[i]] != undefined){
            delete arrObj[A[i]]
        } else {
            arrObj[A[i]] = i;
        }
    }
    let res = 0;
    const objLen = Object.keys(arrObj).length;
    if(objLen === 1){
        const key = Object.keys(arrObj)[0];
        res = key;
    }
    return parseInt(res);
}

const A = [23,23,1,2,2,1,3,3,100,100,-1]
const e = oddOccur(A);
console.log(e);