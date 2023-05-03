const makePromise=():Promise<string>=>{
    return new Promise((resolve,reject)=>{
        const data:string='Data is here';
        if (data){
            resolve(data);
        }
        else{
            reject('data is not here');
        }
    }
    );
}
const makePromiseobj=():Promise<Data>=>{
    return new Promise((resolve,reject)=>{
        const data:Data={data:'Data is here'};
        if (data){
            resolve(data);
        }
        else{
            reject('data is not here');
        }
    }
    );
}


interface Data{
    data:string
}
const getPromiseData=():Promise<string>=>{
    const data=makePromise();
    return data;
}
const getPromiseDataObj=():Promise<Data>=>{
    const data=makePromiseobj();
    return data;
}



interface DataInterface{
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const getTodo=async():Promise<DataInterface>=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    return await response.json()
}

const getTodoData=async():Promise<void>=>{
    const result= await getTodo();
    console.log(result)
}
getTodoData()