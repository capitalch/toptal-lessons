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
    dobj2 = { ...dobj1 };
    dobj2['a'] = 'abc';

<<<<<<< HEAD
    //count carry while adding two +ve numbers
    const a = 998, b = 1899;
    let as = a.toString(), bs = b.toString();
    const len = Math.max(as.length, bs.length);
    as = as.toString().padStart(len, 0);
    bs = bs.toString().padStart(len, 0);
    const aRev = [...as].reverse();
    const bRev = [...bs].reverse();
    let carry = 0;
    for (let i = 0; i < len; i++) {
        let res = aRev[i] + bRev[i] + carry;
        if (res > 9) {
            carry++;
        }
    }

    //interchange objects key values
    const objA = { a: 1, b: 2, c: 3, d: 3 };
    const objB = {};
    let val1;
    for (let x in objA) {
        val1 = objA[x];
        objB[val1] = x;
    }
    console.log(objB);

    //push object in array and change array element to see effect in original object
    const arr3=[];
    obj1 = {a:1,b:2};
    obj2 = {c:3,d:4};
    arr3.push(obj1);
    arr3.push(obj2);
    arr3[0].a=1000;
=======
    //deep clone array
    const arrr1 = [{a:1,b:1},{a:2,b:2},{a:3,b:3}];
    const arrr2 = JSON.parse(JSON.stringify(arrr1));
    arrr2[0]['a']=1000;

    //destructure an object
    const a1 = {
        firstName:'Sushant',
        lastName:'Agrawal',
        address1:'12 J.L'
    };

    const {firstName, ...rest} = a1;
    console.log(rest);
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
    
    //enum
    const myEnums = Object.freeze({'a-1':1,'b-2':2});
    const normalObj = {'a-1':1,'b-2':2};
>>>>>>> 9ab58c0b2d7d64a8e3b585276cb35ef65515da3f
    
    // check if property exists
    const obj1 = {
        myProp:0
    }

    const exists = ('myProp' in obj1);
    if(exists){
        console.log('property exists');
    } else{
        console.log('property does not exist');
    }

    return ret1;

    return ret1;




}

const arr = [1, 3, 3, 5, 6, 8, 10];
const ret = solu1(arr);
console.log(ret);

// module.exports = {
//     solution: solution
// }