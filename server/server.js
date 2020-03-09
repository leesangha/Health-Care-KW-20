const  {recommend } = require("./recommendation-model/recommend");
const express = require('express');
const path = require('path');
const os = require('os');
const router = require('./routes/router');
const db = require('./dbconnection');

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 4001;

app.use(express.static(path.join(__dirname,'..','public/')));


app.post("/addUser",(req,res,next) => {
  const address = req.body.address;
  const password = req.body.password;
  const name = req.body.name;

  db.query("Select * from Member where Id = \'" + address
    + '\' AND Password = \'' + password + '\' AND Name = \'' + name + '\'',
    (err, rows) => {
      //Check User
      if(err)
        console.log('AddUser error');
      else {
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

app.post("/process/login", (req, res, next) => {
  const id = req.body.id;
  const password = req.body.password;
  db.query("Select * from user_information where user_id = \'" + id + '\'' + 'AND user_password = \'' + password + '\'',
    (err,rows) => {
      if(rows.recordset[0] ===undefined || err)
        res.send({err:'error'});
      else {
        db.query("select * from user_preference", async (e,r) => {
          if(r.recordset === undefined || e)
            res.send({err:'error'});
          else {
            let max_user_no = 0;
            let num = 0;
            //유저수 체크
            while(true){
              try{
                const a = r.recordset[num]['음식_0'];
                num +=1;
              }
              catch(e){
                max_user_no = num;
                break;
              }
            }
            console.log(max_user_no);

            const preference = Array(max_user_no).fill(null).map(() => Array());
            let i = 0;
            while(true) {
              let u_no;
              try{
                for(let j = 0; j< 515; j++){
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
            const predicted_preference = await recommend(preference, 3);
            console.log(predicted_preference);
            res.send({user:rows.recordsets[0],
              pref:preference
            })
          }
        })
      }
    })
});

app.post("/hate",(req,res,next) => {
  db.query("read_user_preference'" + 1 + "','" + 1 + "'",(err,rows) =>{
    if(err)
      console.log('error');
    else {
      res.send(rows.recordsets);
    }
  });
  console.log('/hate route now sending file');

});
app.use("/",router);

app.listen(PORT,() => {
  console.log('Check out the app at https://localhost:' + PORT);
});