const express = require('express');
const path = require('path');
const os = require('os');
const router = require('./routes/router');
const db = require('./dbconnection');

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname,'..','public/')));


app.post("/addUser",(req,res,next) =>{
    const address = req.body.address;
    const password = req.body.password;
    const name = req.body.name;

    db.query("Select * from Member where Id = \'" + address
    + '\' AND Password = \'' + password + '\' AND Name = \'' + name + '\'',
    (err, rows) => {
        //Check User 
        if(err)
        console.log('AddUser error');       
        else{

        if(rows.recordset[0] === undefined){
            //New User Insert
            db.query("Insert into Member \n" + "Values (" + '\'' +
            address +'\','+'\'' +  password +'\','+  '\'' +name +'\'' + ')',
            (err,rows) =>{
                if(err)
                console.log('Insert error');
                else {
                    res.send({text : 'success'});
                }
             
            });

        }
        else {
            //Already User Inserted
            res.send({text: 'Same User exists'});
        }
        }
    }
)
   
});

app.post("/process/login",(req,res,next) => {
    const id = req.body.id;
    const password = req.body.password;
    db.query("Select * from Member where Id = \'" + id + '\'' + 'AND Password = \'' + password + '\'',
    (err,rows) =>{
        if(rows.recordset[0] ===undefined || err)
        res.send({err:'error'});
        else{
        console.log(rows.recordset[0]);
        res.send(rows.recordset[0]);
        }
       
    })
   
});

app.post("/hate",(req,res,next) =>{

    db.query("read_user_preference'" + 1 + "','" + 1 + "'",(err,rows) =>{
        if(err)
        console.log('error');
        else{
        res.send(rows.recordsets);
        }
    });
    console.log('/hate route now sending file');

    });
app.use("/",router);

app.listen(PORT,() =>{
    console.log('Check out the app at https://localhost:' + PORT);
});
