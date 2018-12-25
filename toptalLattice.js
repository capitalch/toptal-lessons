const myPt = {
    m: 1,
    c: 1,
    m90: 1,
    c90: 1
}

function searchPoint(x1, y1, x2, y2) {
    myPt.m = (y2 - y1) / (x2 - x1);
    myPt.m90 = -myPt.m;
    myPt.c90 = y2 - myPt.m90 * x2;
    myPt.c = y1 - myPt.m * x1;
    for (let i = 0; i <= 100; i++) {
        const y = myPt.m90 * i + myPt.c90;
        if (Number.isInteger(y)) {
            console.log('pt:', i, ',', y);
        }
    }
}

function solution(x1, y1, x2, y2) {
    searchPoint(x1, y1, x2, y2);
}
const x1 = 2, y1 = 9, x2 = 10, y2 = 6.9;
const ret = solution(x1, y1, x2, y2);
console.log('completed');