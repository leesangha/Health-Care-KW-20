const db = require('../dbconnection');
const { predictPreference } = require('../predictPreference');

module.exports = function loginRouter(req, res) {
  const id = req.body.id;
  const password = req.body.password;
  db.query("Select * from user_information where user_id = \'" + id + '\'' + 'AND user_password = \'' + password + '\'',
    (err,rows) => {
      if(rows === undefined)
        res.send({err: 'error'});
      else if(rows.recordset[0] === undefined || err)
        res.send({err: 'error'});
      else {
        db.query("select * from user_preference", async (e,r) => {
          if(r.recordset === undefined || e)
            res.send({err:'error'});
          else {
            let max_user_no = 0;
            let num = 0;
            //유저수 체크
            while(true) {
              try {
                const a = r.recordset[num]['음식_0'];
                num +=1;
              }
              catch(e){
                max_user_no = num;
                break;
              }
            }
            console.log('max_user의 수 ' + max_user_no);

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

            // 선호도 모델 계산되고 정렬되어 반환됨.
            await predictPreference(preference);

            res.send({user:rows.recordsets[0],
              pref:preference
            })
          }
        })
      }
    })
};