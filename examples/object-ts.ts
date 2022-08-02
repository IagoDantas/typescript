const person = {
    name:'Mariana',
    age:28,
    career:'developer'
}

// const andre: (name:string,age:number,career:string) = {
//     name:'Andre',
//     age:25,
//     career:"painter"
// }

// const paula: (name:string,age:number,career:string) = {
//     name:'Andre',
//     age:25,
//     career:"developer"
// }

enum Career{
    Developer,
    Painter,
    Actor,
    Player
}

interface IPerson {
    name:string,
    age:number,
    career?: Career,
}

interface IStudent extends IPerson{
    subjects:string[],
}

const vanessa: IPerson = {
    name:'Vanessa',
    age:25,
    career:Career.Developer
}

const maria: IPerson = {
    name:'Maria',
    age:28,
    career:Career.Developer
}

const jessica : IStudent = {
    name:'Jessica',
    age:12,
    career:Career.Developer,
    subjects:['math','english','science']
}


const monica : IStudent = {
    name:'Monica',
    age:14,
    subjects:['science','english','math'],
}

const toList = (list:string[]) =>{
    for(const item of list)
    {
        console.log('- ',item);
    }
}

toList(monica.subjects);