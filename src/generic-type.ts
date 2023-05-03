const rollNumber: number[]=[1,20,12];
const rollString: string[]=['1','20','12'];

const rollNumber2: Array<number>=[1,20,12];
const rollString2: Array<string>=['1','20','12'];


type GenArrayN = Array<number>;
type GenArrayS = Array<string>;

const rollNumberG: GenArrayN=[1,20,12];
const rollStringG: GenArrayS=['1','20','12'];


type GenArray<T> = Array<T>
// these T carries the type
const rollNumberGen: GenArray<number>=[1,20,12];
const rollStringGen: GenArray<string>=['1','20','12'];


type NameRollArray= {
    name:string, 
    roll:number
}

const nameRoll: GenArray<NameRollArray>=[
    {
        name: 'kabir',
        roll: 10
    },
    {
        name: 'sabbir',
        roll: 100
    },
]


type GenTuple<X,Y>=[X,Y]
interface NameSalary {
    name:string,
    salary: number
}

const finance:GenTuple<NameSalary,NameSalary>=[
    {
        name:'mamun',
        salary: 1000000
    },
    {
        name:'saif',
        salary: 1000000
    },
]