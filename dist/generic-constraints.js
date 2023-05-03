"use strict";
const eduFinance = {
    resident: 'own',
    tutionFee: 0,
    admissionFee: 0,
};
const addinginfo = (info) => {
    const name = "Edita";
    const newData = Object.assign(Object.assign({}, info), { name });
    return newData;
};
const update = addinginfo(eduFinance);
