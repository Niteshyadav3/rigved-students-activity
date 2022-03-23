let fs=require('fs');
//this is a javascript object
let employee={id:3,name:'Nitesh',salary:25000};
//converting javascript object to JSON
let jsonString=JSON.stringify(employee);

console.log(employee);
console.log(jsonString);

fs.writeFileSync('employee.json',jsonString);
console.log('done...');