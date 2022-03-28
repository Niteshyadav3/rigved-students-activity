let express=require("express");
let app=express();
let fs=require("fs");
let parser=require("body-parser");
let PORT=3000;
app.listen(PORT,()=>console.log(`Server running in ${PORT}`));
app.use(parser.json());
app.post('/user',(request,response)=>{
    let data=fs.readFileSync("activity25.json");
    let dataString=data.toString();
    if(dataString.length<1 || dataString ==""){
        jsArray=[];
    }else{
        jsArray=JSON.parse(dataString);
    }
    let content=request.body;
    jsArray.push(content);
    let jsonObject=JSON.stringify(jsArray);
    fs.writeFileSync('activity25.json',jsonObject);
    response.json('Save..')
});

app.get('/user',(request,response)=>{
    let data=fs.readFileSync("activity25.json");
    let datastring=data.toString();
    let jsObject=JSON.parse(datastring);
    response.json(jsObject);
});


app.get('/user/:id',(request,response)=>{
    let id1=request.params.id;
    let data=fs.readFileSync("activity25.json");
    let datastring=data.toString();
    let jsObject=JSON.parse(datastring);
    for(let i=0;i<jsObject.length;i++){
        if(jsObject[i].id==id1){
            let show={id:jsObject[i].id,name:jsObject[i].name,age:jsObject[i].age};
            response.json(show);
        }
    }
});

app.delete('/user/:id',(request,response)=>{
    let id1=request.params.id;
    let data=fs.readFileSync("activity25.json");
    let datastring=data.toString();
    let jsObject=JSON.parse(datastring);
    for(let i=0;i<jsObject.length;i++){
        if(jsObject[i].id==id1){
            jsObject.splice(i,1);
            let jsonObject=JSON.stringify(jsObject);
            fs.writeFileSync('activity25.json',jsonObject);
            response.json(jsonObject);
        }
    }
});
