type Measurement={
    length: number;
    width: number;
    height?: number;
    ratio?:number;
   
}



type AreaString ={
    height:string;
    width:string;
}

type AreaNumber ={
    height:number;
    width:number;
}
 
type ArrStr={
    [key in keyof Measurement]:string
}

type ArrNum={
    [key in keyof Measurement]:number
}

// generic

type Area<T>={
    readonly [key in keyof T]: T[key]
}
const rectArea:Area<Measurement>={
    length:10,
    width:6
}

// rectArea.width =15