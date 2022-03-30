
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql2');
 
app.use(bodyParser.json());
//server
app.listen(8080,() =>{
    console.log('Server started on port 8080...');
});
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',  
    password: 'root', 
    database: 'rigved_db' 
  });
conn.connect((err) =>{
    if(err) throw err;
    console.log('Mysql Connected with App...');
  });
app.get('/activity2',(req, res) => {
let sqlQuery = "SELECT * FROM emp";
let query = conn.query(sqlQuery, (err, results) => {
    if(err) 
    throw err;
    res.send((results));
});
});

app.get('/activity2/:id',(req, res) => {
    let sqlQuery = "SELECT * FROM emp WHERE id=" + req.params.id;
    let query = conn.query(sqlQuery, (err, results) => {
      if(err) throw err;
      res.send((results));
    });
});

app.post('/activity2',(req, res) => {
    let data = {id: req.body.id,name: req.body.name, salary: req.body.salary};
    let sqlQuery = "INSERT INTO emp SET ?";
    let query = conn.query(sqlQuery, data,(err, results) => {
      if(err) throw err;
      res.send((results));
    });
});

app.put('/activity2/:id',(req, res) => {
    let sqlQuery = "UPDATE emp SET salary='"+req.body.salary+"', name='"+req.body.name+"' WHERE id="+req.params.id;
    let query = conn.query(sqlQuery, (err, results) => {
      if(err) throw err;
      res.send((results));
    });
  });

app.delete('/activity2/:id',(req, res) => {
    let sqlQuery = "DELETE FROM emp WHERE id="+req.params.id+"";
    let query = conn.query(sqlQuery, (err, results) => {
      if(err) throw err;
        res.send((results));
    });
  });
