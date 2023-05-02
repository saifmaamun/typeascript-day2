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

