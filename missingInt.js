function missingInt1(A) {
    const positiveA = A.filter((x, i) => x > 0);
    const sortedA = positiveA.sort((a, b) => a - b);
    const len = sortedA.length;
    if (len == 0) {
        return 1;
    }
    let ret = 0;

    for (let i = 0; i < len; i++) {
        if (i === 0) {
            if (sortedA[i] > 1) {
                ret = 1;
                break;
            }
        } else {
            if ((sortedA[i] - sortedA[i - 1]) > 1) {
                ret = sortedA[i - 1] + 1;
                break;
            }
        }
        ret = sortedA[i] + 1;
    }
    return ret;
}

function missingInt2(A){
    const cloneA = A.filter((v, i, a) => v > 0);
    let i = 0;
    while (true) {
        i++;
        let isInArray = cloneA.indexOf(i);
        if (isInArray === -1) {
            break;
        }
    };
    return i;
}

function testMissingInt(){
    const A = [-1, -2, 0, 2, 2, 4, 1, 5, 8, 9, 7, 5, 8, 9, 3, 4, 6, 10, 12, 100,13,18,19];
    var hrstart = process.hrtime();
    missingInt1(A);
    var hrend = process.hrtime(hrstart);
    console.log("Execution time: ", hrend[0], hrend[1]/1000000);
    
    hrstart = process.hrtime();
    missingInt2(A);
    var hrend = process.hrtime(hrstart);
    console.log("Execution time: ", hrend[0], hrend[1]/1000000);
}
testMissingInt();
