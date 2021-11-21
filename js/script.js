//task 1
let arr1 = [`a`,`b`,`c`,`d`];
arr1.splice(1, 0, `+`);
arr1.splice(3, 0, `,`);
arr1.splice(5, 0, `+`);
let arr2 = arr1.join(``)
console.log(arr2)

//task 2
let arr3 = [2, 5, 3, 9];
let result = arr3.slice(0,1)*arr3.slice(1,2)+arr3.slice(2,3)*arr3.slice(3)
console.log(result)

//task 3
let arr4 = [[1, 2, 3], [4, 5, 6], [7,8,9]];
let arr5 = arr4.flat().filter(num => num  === 4);
console.log(arr5);

//task 4 
let obj = {
        js: [`jQuery`, `Angular`], 
        php: `hello`,
        css: `world`
    }
console.log(obj.js[0]);

//task 5 
function arrX ( num = 10){
    let arr6 = [];
    let symb = `x`;
    for ( let i = 0; i <= num; i++) {
        arr6.push(symb);
        symb += symb[0];
    }
    return arr6
}
console.log(arrX());

//task 6
function arrNumber ( arg = 10){
    let arr7 = [];
    for (let i = 1; i <= arg; i++) {
        let box = ``;
        for ( let a = 1; a <= i; a++) {
            box += i;
        }
        arr7.push(box)
    }
        return arr7;
    }
    console.log(arrNumber())

    //task 7

function arrayFill(item = `x`, numItem = 6){
    let arr8 = [];
    for ( let i = 0; i < numItem; i++) {
         arr8.push(item);
    }
    return arr8;
    }
console.log(arrayFill(`x`,5));
console.log(arrayFill(`@`,4));

//task 8
let arr9 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const reducer = (acc, item) => {
    if (acc.sum > 10) return acc;
    acc.sum += item;
    acc.result += 1;
    return acc;
}
let resultOne = arr9.reduce(reducer, {sum:0, result: 0}).result;
console.log(resultOne);

//task 9 
let arr10 = [289, 33, 45, 5, 60];
let arr11 = [];
for ( let i = arr10.length - 1; i >= 0; i--) {
    arr11.push(arr10[i]);
}
console.log(arr11);

//task 10
let arr12 = [[1, 2, 3], [4, 5], [6]];
let resultArr12 = arr12.flat().reduce((acc, item) => acc += item, 0);
console.log(resultArr12);

//task 11 
let arr13 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let resultArr13 = arr13.flat().flat().reduce((acc, item) => acc += item, 0);
console.log(resultArr13)