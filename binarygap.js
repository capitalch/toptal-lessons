let gaps = [];
let gap = 0;
let started = false;

function calculateGaps(c) {
    if (c === '1') {
        if (started) {
            gaps.push(gap);
            gap = 0;
        } else {
            started = true;
        }
    } else {
        if (started) {
            gap++;
        }
    }
}

function binarygap(x) {
    let binValue = x.toString(2);
    console.log(binValue);
    const xArray = binValue.split('');
    xArray.forEach(e => {
        calculateGaps(e);
    });
    if (gaps.length === 0) {
        return 0;
    } else {
        return Math.max(...gaps);
    }
}

const result = binarygap(32);
console.log(result);