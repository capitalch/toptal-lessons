function getString(arr) {
    let ret = '';
    for (let i = 0; i < arr.length; i++) {
        ret = ret + arr[i];
    }
    return (ret);
}

function insertTest(S, T) {
    const sArr = S.split('');
    const tArr = T.split('');
    const sLen = S.length;
    const tLen = T.length;
    let diff = '';
    let cnt = 0;
    for (let i = 0; i < tLen; i++) {
        const tVal = tArr[i];
        const sVal = sArr[i];
        if (sVal != tVal) {
            cnt++;
            sArr.splice(i, 0, tVal);
            if (getString(sArr) == T) {
                return 'INSERT ' + tVal;
            } else {
                return 'IMPOSSIBLE';
            }
        }
    }
    if ((cnt > 1) || (cnt === 0)) {
        return 'IMPOSSIBLE';
    }
    return ('INSERT ' + diff);
}

function replaceTest(S, T) {
    const sArr = S.split('');
    const tArr = T.split('');
    const sLen = S.length;
    const tLen = T.length;

    for (let i = 0; i < tLen; i++) {
        const tVal = tArr[i];
        const sVal = sArr[i];
        if (sVal != tVal) {
            sArr[i] = tVal;
            if (getString(sArr) == getString(tArr)) {
                return 'REPLACE ' + sVal + ' ' + tVal;
            } else {
                return 'IMPOSSIBLE';
            }
        }
    }
    return ('IMPOSSIBLE');
}

function swapTest(S, T) {
    const sArr = S.split('');
    const tArr = T.split('');
    const sLen = S.length;
    const tLen = T.length;

    for (let i = 0; i < tLen; i++) {
        const tVal = tArr[i];
        const sVal = sArr[i];
        if (sVal != tVal) {
            const temp = sArr[i];
            sArr[i] = sArr[i + 1];
            sArr[i + 1] = temp;
            if (getString(sArr) == getString(tArr)) {
                return 'SWAP ' + sArr[i+1]  + ' ' + sArr[i];
            } else {
                return 'IMPOSSIBLE';
            }
        }
    }
    return ('IMPOSSIBLE');
}

function solution(S, T) {
    if (S === T) {
        return 'EQUAL';
    }
    if (Math.abs(S.length - T.length) >= 2) {
        return 'IMPOSSIBLE';
    }
    if ((T.length - S.length) === 1) {
        return insertTest(S, T);
    }
    if (T.length == S.length) {
        const ret = replaceTest(S, T);
        if (ret != 'IMPOSSIBLE') {
            return ret;
        } else {
            return swapTest(S, T);
        }
    }
    return 'IMPOSSIBLE';
}
const S = 'form';
const T = 'from';
const ret = solution(S, T);
console.log(ret);