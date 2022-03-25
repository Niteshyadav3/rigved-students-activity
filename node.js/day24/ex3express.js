let express=require('express');
let app=express();
app.listen(3003,()=> console.log('Server is running in 3003'));
app.get('/',(request,response)=>{
    response.send('Hello World!');
});
app.get('/employee',(request,response)=>{
    let emp={id:100,name:'Nitesh',salary:25000};
    response.json(emp);
});
app.get('/employees',(request,response)=>{
    let employeeArray=[
        {id:102,name:'Gaurav',salary:26600},
        {id:103,name:'Rohit',salary:30600},
        {id:104,name:'Aman',salary:35500},
    ]
    response.json(employeeArray);
});