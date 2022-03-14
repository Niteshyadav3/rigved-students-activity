interface A {
    name: string;
}
interface B {
    phone: number;
}

//obj1 is of A & B both
let obj1:A & B;
obj1={name:'Nitesh',phone:8972894778}
document.write(`<p>Name=${obj1.name},phone=${obj1.phone}</p>`)