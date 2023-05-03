
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

type Info<T>=Array<T>;


interface Student<X,Y,Z>{
    family:X,
    education:Y,
    finance:Z,
}


const editaInfo:Student<FamilyInterface,EducationInterface,FinanceInterface>={
    family:{
        name: 'Edita',
        fathersName:'janina',
        mothersName:'janina',
        addresses:'kandapara',
    },
    education:{
        class:9,
        group:'science',
        school:'prottasaha',
    },
    finance:{
        resident:'own',
        tutionFee:0,
        admissionFee:0,
    }
}
// const nipaInfo:Info<Student<FamilyInterface,EducationInterface,FinanceInterface>>=[
//     family:{
//         name: 'Edita',
//         fathersName:'janina',
//         mothersName:'janina',
//         addresses:'kandapara',
//     },
//     education:{
//         class:9,
//         group:'science',
//         school:'prottasaha',
//     },
//     finance:{
//         resident:'own',
//         tutionFee:0,
//         admissionFee:0,
//     }
// ]





