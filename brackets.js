function isLeft(c) {
    const left = '({[';
    if (left.includes(c)) {
        return true;
    } else {
        return false;
    }
}

function isMatch(a, b) {
    const x = (a === '{') && (b === '}');
    const y = (a === '(') && (b === ')');
    const z = (a === '[') && (b === ']');
    return (x || y || z);
}

function solution(S) {
    const stack = [];
    arr = S.split('');
    const len = arr.length;
    if (S.length === 0) {
        return 1;
    }
    const validChars = '({[)}])';
    let c='';
    for (let i = 0; i < len; i++) {
        c=arr[i];
        if (!validChars.includes(c)) {
            return 0;
        }
        if (isLeft(c)) {
            stack.push(c);
        } else {
            const a = stack.pop();
            if (a === undefined) {
                return 0;
            } else{
                if(!isMatch(a,c)){
                    return 0;
                }
            }
        }
    }
    if(stack.length > 0){
        return 0
    }    
    return 1;
}
// const S = '{[()()]}';
const S = '';
const ret = solution(S);
console.log(ret);