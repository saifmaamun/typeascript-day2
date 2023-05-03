interface Person{
    name: string,
    age: number,
    address: string,
    salary: number,
}

type keytype = keyof Person;
// takes the key and puts it as union 

const mamun:Person = {
    name: 'Maamun',
    age: 34,
    address: 'Dhaka',
    salary: 1000000,
}

const getValue=<X,Y extends keyof X>(obj:X, key:Y)=>{
    return obj[key]
}