type a =string;
type b = undefined;
type c = null;

type d= a extends number ? number : b extends number ? number : c extends number ? number : null



interface Sheikh{
    wife1:string;
    wife2:string;
    wife3:string;
    gf1:string;
}

type CheckProperty<T,K>= K extends keyof T? true: false



type CheckWife= CheckProperty<Sheikh,'wife3'>



type PcParts= 'psu'| 'ram'| 'gpu'

type RemovePcParts<T>= T extends 'psu'? never: T;
 type remainPcParts= RemovePcParts<PcParts>