let fs = require("fs");
let data= fs.readFileSync('activity.json');
let dataString=data.toString();
let jsArray=undefined;

if(dataString.length <1 || dataString == ""){
    jsArray=[];//creating javascript array
}else{
    jsArray=JSON.parse(dataString);//json array will be converted to javascript array
}

let http=require("http");
let url=require("url");
let PORT_NO=3001;

http
.createServer((request,response)=>{
    let urlString=request.url;
    if(urlString !='/favicon.ico'){
        //extract the query parameter & convert it into javascript object
        let urlObject=url.parse(urlString,true);
        let user=urlObject.query;
        console.log(user);
        console.log(JSON.stringify(user));
        response.writeHead(200,{'content-type':'text/html'});
        response.write(`<h2>Hello ${user.name},your age is ${user.age}</h2>`)

        let n=user.name;
        let a=user.age;
        letemp={name:n,age:a};
        jsArray.push(user);
        let jsonArray=JSON.stringify(jsArray);
        fs.writeFileSync('activity.json',jsonArray);
    }
    response.end();
})
.listen(PORT_NO,()=>console.log(`Server running at ${3001}`));