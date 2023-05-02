// for primitive types use ALIAS
type TUser ={
    name:string,
    age:number,
}

// for object types use INTERFACE
interface IUser {
    name:string,
    age:number,
}

const manType: TUser={
    name: 'Alias',
    age:10
}

const manInt: IUser={
    name: "Int",
    age:10
}


// can extend with interface
interface IExtendUser extends IUser{
    position:string,
}

const eManInt: IExtendUser={
    name:'extend',
    age:10,
    position:'high'
}

// can extend with type

type TExtendUser= TUser &{
    designation:string
}

const eManTyp: TExtendUser= {
    name:'extend',
    age:10,
    designation:'high'
}




// can typecast function || this type is much appreciable.
type FunctionType=(n1:number,n2:number)=>number;
const addNumber:FunctionType=(n1,n2)=>n1+n2


// can interface function
interface IFunction{
    (n1:number,n2:number):number
}
const substruct:IFunction=(n1,n2)=>n1-n2




// array can be typed
type NumberArray=number[];
const ageArray:NumberArray=[12,13, 15]



// array can be interfaced
interface INumberArray{
    [index:number]:number
}
const iAgeArray: INumberArray=[25,12,9]
