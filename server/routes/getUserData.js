const db = require('../dbconnection');
const { predictPreference } = require('../predictPreference');

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

function getUserPreference(req, res) {
  db.query("select * from user_preference", async (err, rows) => {
    const usersPreferences = rows.recordset;

    if(usersPreferences === undefined || err)
      res.send({err:'error'});
    else {
      const totalUsers = usersPreferences.length;
      console.log('Total users : ' + totalUsers);

      let preference = usersPreferences.map(object => {
        const values = Object.values(object);
        return values.slice(1, values.length);
      });

      // 선호도 모델 계산되고 정렬되어 반환됨.
      preference = await predictPreference(preference);
      res.send({pref: preference})
    }
  })
}

module.exports = {
  getNutritionRouter: getNutritionRouter,
  getIntakeRouter: getIntakeRouter,
  getUserPreference: getUserPreference
};