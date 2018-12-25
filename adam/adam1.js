const a = [17, 28, 30];
const b = [99, 16, 8];
let as = 0, bs = 0;
if (a[0] > b[0]) {
    as++;
}
if (a[2] < b[2]) {
    bs++;
}
const scores = [];
scores.push(as)
scores.push(bs);
console.log(scores);