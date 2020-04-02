const db = require('../dbconnection');

module.exports = function hateRouter(req, res) {
  const user_id = req.body.user_id;
  const food_no = req.body.food_id;
  console.log(user_id+  '  ' + food_no);
  
  db.query(`change_user_preference '${user_id}','${food_no}','0'`,(err,rows) =>{
    if(err)
      console.log('error');
    else {
      res.send(rows.recordsets);
    }
  });
};