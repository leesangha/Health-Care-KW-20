const express = require('express');
const path = require('path');
const os = require('os');
const router = require('./routes/router');
const db = require('./dbconnection');

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname,'..','public/')));

app.get("/api/getUsername",(req,res,next) =>{
    res.send({username: os.userInfo().username})
});

app.post("/addUser",(req,res,next) =>{
    var address = req.body.address 
    var password = req.body.password 
    var name = req.body.name

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
}
)

app.post("/hate",(req,res,next) =>{


    db.query("read_user_preference'" + 1 + "','" + 1 + "'",(err,rows) =>{
        if(err)
        console.log('error');
        else{
        res.send(rows.recordsets);
        }
    });
    console.log('/hate route now sending file');

    })
app.use("/",router);

app.listen(PORT,() =>{
    console.log('Check out the app at https://localhost:' + PORT);
});
