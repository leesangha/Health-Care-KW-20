const db = require('../dbconnection');

function getNutritionRouter(req, res) {
  db.query("read_user_nutrition'" +  1 + "'", (err,rows) => {
    if(err)
      console.log('error');
    else {
      res.send(rows.recordsets[0][0]);
    }
  });
}

function getIntakeRouter(req, res) {
  db.query("read_user_today_nutrition'" +  1 + "'", (err,rows) =>{
    if(err)
      console.log('error');
    else {
      res.send(rows.recordsets[0][0]);
    }
  });
}

module.exports = {
  getNutritionRouter: getNutritionRouter,
  getIntakeRouter: getIntakeRouter
};