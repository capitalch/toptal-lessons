function solution(A) {
    const set = new Set(A);
    const A1 = Array.from(set.values());
    const ret = A1.length;
    return (ret);
}
const A = [1, 2, 4, 3, 3, 1, 2, 3, 4, 5, 6];
const ret = solution(A);
console.log(ret);