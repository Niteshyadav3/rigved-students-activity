let fs=require("fs");
let message="Hello everyone this is my fourth message\n";
//writeFileSync 3rd argument appends the data
fs.writeFileSync("message.txt",message, {flag:'a+'});
console.log("Done...");