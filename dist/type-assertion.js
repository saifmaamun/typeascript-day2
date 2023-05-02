"use strict";
let box;
box = "This Box Type is Any";
// can be defined as string
console.log(box.length);
box = 28;
// can be defined as number
console.log(box + 17);
const footToInch = (param) => {
    if (typeof param === 'string') {
        const value = parseFloat(param) * 30.48;
        return `the value is ${value} inch`;
    }
    if (typeof param === 'number') {
        const value = param * 30.48;
        return value;
    }
};
console.log(footToInch('5.3'));
console.log(footToInch(5.3));
const str = footToInch('5.5');
const num = footToInch(5.5);
