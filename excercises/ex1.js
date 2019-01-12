// 'use strict'
function solu1(arr) {
    //convert array to object
    const ret = { ...arr };
    const ret1 = Object.assign({}, arr);
    //maps
    const map = new Map();

    //unique array
    const set = new Set(arr);
    const arr1 = [...set];


    // find value of key in a nested object
    const obj = {
        a: 1, b: { b1: 2 }, c: { c1: { c11: 3 } }
    }
    // find value of c11 if it exists
    let val = null;
    const f = (ob) => Object.keys(ob).forEach((x) => {
        if ((typeof ob[x]) == 'object') {
            f(ob[x]);
        } else {
            if (x === 'c11') {
                val = ob[x];
            }
        }
    });
    f(obj);

    // to convert a number to array of digits
    const num1 = 123564;
    const digitsArray = [...num1.toString()].map(Number);

    //filter out the specified values from an specified array. Return the original array without the filtered values
    //could also use push
    const spArray1 = ['a', 's', 'd', 'f'];
    const filt1 = ['d', 'f'];
    filt1.forEach((x) => {
        spArray1.forEach((y, j) => {
            if (x == y) {
                spArray1.splice(j, 1)
            }
        });
    });

    //create random hexadecimal code
    const numb1 = Math.floor(Math.random() * 9999);
    const hex1 = numb1.toString(16);

    //find non unique values from an array
    const nonA = [1, 2, 2, 3, 3, 4, 5, 5]; //out = [2,3,5]
    const map1 = new Map();
    nonA.map((x, i) => {
        let valx = map1.get(x);
        if (valx) {
            map1.set(x, valx + 1);
        } else {
            map1.set(x, 1);
        }
    });
    const outA1 = [];
    map1.forEach((v, k) => {
        if (v > 1) {
            outA1.push(k)
        }
    });

    //another way
    const outA2 = nonA.filter((v) => nonA.indexOf(v) !== nonA.lastIndexOf(v));
    const outA3 = [...new Set(outA2)];

    //decapitalize first letter of string
    const str1 = 'ABcDef';
    const firstLetter1 = str1[0].toLowerCase();
    str2 = str1.replace(str1[0], firstLetter1);

    //deep clone an object
    const dobj1 = { a: { b: { c: { d: 1 } } } }
    dobj2 = {...dobj1};
    dobj2['a'] = 'abc';

    //destructure an object
    const a1 = {
        firstName:'Sushant',
        lastName:'Agrawal',
        address1:'12 J.L'
    };
    // let firstName,lastName;
    // {firstName,lastName} = a1;

    // const {name,...others} = a1;
    // const [name1,addresses1] = a1;
    // console.log(name1,':',addresses1);
    // console.log(name);
    // console.log(others)

    var x1 = 0;
    function foo(){
        var x1 = 1;
    }
    foo();
    console.log(x1);

    //variable swapping by array destructuring
    let i=100,j=200;
    [i,j] = [j,i];

    //computed property names
    const a = 'my', b='name';
    const myObj={
        [a.concat(b)] : 'sushant'
    };
    

    return ret1;

}

const arr = [1, 3, 3, 5, 6, 8, 10];
const ret = solu1(arr);
console.log(ret);

// module.exports = {
//     solution: solution
// }