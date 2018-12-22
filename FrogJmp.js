function frogJmp(X, Y, D) {
    const diff = Y - X;
    if((D===0) || diff ===0){
        return 0;
    }
    let ret = Math.floor(diff/D);
    let delta = diff % D;
    if(delta > 0){
        ret++;
    }
    return ret;
}

const X = 10, Y = 85, D = 30;
const ret = frogJmp(X, Y, D);
console.log(ret);