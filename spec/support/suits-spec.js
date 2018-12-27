const sol = require('../../toptal');
describe('string sort test',()=>{
    it('zaxmanbc test',()=>{
        // const s1 = 'plaetu', s2 = 'axabca';
        // const ret = sol.solution(s1,s2);
        // expect(ret).toBe('ubaplaet');
        expect(sol.solution('zaxmanbc')).toBe('aabcmnxz');
    })
})
// xdescribe('passing cars',()=>{
//     it('test1',()=>{
//         let arr1 = [0, 1, 0, 1, 1];
//         const res = passingCars.solution(arr1);
//         expect(res).toBe(5);
//     })
// })
// describe('divisible',()=>{
//     it('factor 5',()=>{
//         const ret = sol.solution(5);
//         expect(ret).toBe(2);
//     });
//     it('factor 1',()=>{
//         const ret = sol.solution(1);
//         expect(ret).toBe(1);
//     });
//     it('factor 2',()=>{
//         const ret = sol.solution(2);
//         expect(ret).toBe(2);
//     });
//     it('factor 24',()=>{
//         const ret = sol.solution(24);
//         expect(ret).toBe(8);
//     });
//     it('factor 34',()=>{
//         const ret = sol.solution(34);
//         expect(ret).toBe(4);
//     })
// })