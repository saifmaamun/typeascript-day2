interface FinanceInt{
    resident:string;
    fatherSalary?:number;
    tutionFee:number;
    admissionFee:number;
}

const eduFinance={
    resident:'own',
    tutionFee:0,
    admissionFee:0,
}

const addinginfo = <T extends FinanceInt>(info:T)=>{
    const name= "Edita"
    const newData= {...info,name};
    return newData;
}



const update= addinginfo(eduFinance);