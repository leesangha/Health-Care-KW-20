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
    const age = req.body.age;
    const sex = req.body.sex;

    db.query("Select * from user_information where user_id = \'" + address
    + '\' AND user_password = \'' + password + '\' AND user_name = \'' + name + '\'',
    (err, rows) => {
        //Check User 
        if(err)
        console.log('AddUser error');       
        else{

        if(rows.recordset[0] === undefined){
            //New User Insert
            db.query("register_user_information \'" + address + "\' \'" + password + "\' \'" + name + "\' \'" + age + "\' \'" + sex + "\'",
            (err,rows) =>{
                if(err){
                    console.log('insert error');
                    console.log(address);
                    console.log(password);
                }
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
    db.query("Select * from user_information where user_id = \'" + id + '\'' + 'AND user_password = \'' + password + '\'',
    (err,rows) =>{
        if(rows.recordset[0] ===undefined || err)
        res.send({err:'error'});
        else{
        const user_no = rows.recordset[0];
        console.log(rows.recordset[0].user_no);
        db.query("select * from user_preference", (e,r) => {
            if(r.recordset === undefined || e)
            res.send({err:'error'});
            else {
                var max_user_no = 0;
                var num = 0;
                //유저수 체크 
                while(true){
                    try{
                        var a = r.recordset[num]['음식_0'];
                        num +=1;
                    }
                    catch(e){
                        max_user_no = num;
                        
                        break;
                    }
                }
               

                const preference =
                Array(max_user_no).fill(null).map(() => Array());
                var i = 0;
                while(true) {

                    var u_no;
                    try{
                        for(var j = 0; j< 515; j++){
                            u_no = i;
                            preference[u_no][j] = 
                            r.recordset[i]['음식_'+j];
                        }
                        i+=1;
                    }
                    catch(e){
                        break;
                    }
                }
               // console.log(preference);
                res.send({user:rows.recordsets[0],
                    pref:preference
                })

            }
        })
        
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
