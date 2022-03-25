let fs=require("fs");
data=fs.readFileSync("activity.json");
dataString=data.toString();
jsArray=JSON.parse(dataString);
console.log(jsArray);

let express=require("express");
let app=express();
app.listen(3003,()=> console.log('Server is running in 3003'));
app.get('/',(request,response)=>{
    response.send("Hello nitesh here");
});
app.get('/student',(request,response)=>{
    response.json(jsArray)
});