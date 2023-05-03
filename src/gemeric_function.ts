const arr=(param:string):string[]=>{
    return[param]
}
const genArr=<T>(param:T):T[]=>{
    return[param]
}


const r1=arr('ajaira')
const r2=genArr<string>('ajaira')
const r3=genArr<number>(100)


const arrGen=<X,Y>(param1:X,param2:Y):[X,Y]=>{
    return[param1,param2]
}

interface FamilyInterface{
    name: string;
    fathersName:string;
    mothersName:string;
    addresses:string;
}
interface EducationInterface{
    class:number;
    group?:string;
    school?:string;
    collage?:string;
}

interface FinanceInterface{
    resident:string;
    fathersSalary?:number;
    tutionFee:number;
    admissionFee:number;
}

const edita =arrGen<FamilyInterface,EducationInterface>(
    {
        name: 'Edita',
        fathersName:'janina',
        mothersName:'janina',
        addresses:'kandapara',
    },
    {
        class:9,
        group:'science',
        school:'prottasaha',
    }
)

const editaFinance:FinanceInterface={
    resident:'own',
    tutionFee:0,
    admissionFee:0,
}


const addinfo = <T>(info:T)=>{
    const newData= [...edita,info];
    return newData;
}

const updateEdita= addinfo(editaFinance);

console.log(edita)
console.log(updateEdita)