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
