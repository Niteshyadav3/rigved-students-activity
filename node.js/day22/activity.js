let fs=require('fs');
let read=require('readline-sync');

let id=read.question('Enter your id:');
let name=read.question('Enter your name:');
let salary=read.question('Enter your salary:');

let user=[id,name,salary];

let jsonString=JSON.stringify(user);

fs.writeFileSync('users.json',jsonString.concat(',\n'),{flag:'a+'});
console.log('Adding');