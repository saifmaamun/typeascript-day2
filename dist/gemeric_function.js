"use strict";
const arr = (param) => {
    return [param];
};
const genArr = (param) => {
    return [param];
};
const r1 = arr('ajaira');
const r2 = genArr('ajaira');
const r3 = genArr(100);
const arrGen = (param1, param2) => {
    return [param1, param2];
};
let edita = arrGen({
    name: 'Edita',
    fathersName: 'janina',
    mothersName: 'janina',
    addresses: 'kandapara',
}, {
    class: 9,
    group: 'science',
    school: 'prottasaha',
});
const editaFinance = {
    resident: 'own',
    tutionFee: 0,
    admissionFee: 0,
};
const addinfo = (info) => {
    const newData = [...edita, info];
    return newData;
};
const updateEdita = addinfo(editaFinance);
console.log(edita);
console.log(updateEdita);
