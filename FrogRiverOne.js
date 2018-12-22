function frogRiverOne(X, A) {
    const sortedA = A.sort((a, b) => a - b);
    const len = sortedA.length;
    let ret = -1;
    let newA = [];
    if((len === 0) || (X===0) || (A===0)){
        return ret;
    }
    if(len === 1){
        if(sortedA[0] != 1){
            return ret;
        }
    }
    for(let i=0;i<len;i++){
        if(newA[sortedA[i]] == undefined){
            newA[sortedA[i]] = i+1;
        }
    }
    const len1 = newA.length;
    if (len1 < X){
        return ret;
    }
    for(let i=1;i<len1;i++){
        if(newA[i] == undefined){
            ret = -1;
            return ret;
        }
    }
    newA.shift();
    ret = len1;
    return ret;
}

const A = [1,3,5,4,2,5,4];
const X = 5;
const res = frogRiverOne(X, A);
console.log(res);