function permCheck(A) {
    const len = A.length;
    if(len === 0){
        return 0;
    }

    const set = new Set(A);
    const A1 = Array.from(set.values());

    const A2 = A1.sort((a,b)=>a-b);
    const len1 = A2.length;
    const max = Math.max(...A2);
    if((max === len) && (max === len1)){
        return 1;
    } else{
        return 0;
    }
}
const A = [4, 1, 3, 2];
const ret = permCheck(A);
console.log(ret);