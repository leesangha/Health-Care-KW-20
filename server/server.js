const express = require('express');
const path = require('path');
const router = require('./routes/router');
const db = require('./dbconnection');
const loginRouter = require('./routes/login');
const addUserRouter = require('./routes/addUser');
const hateRouter = require('./routes/hate');
const { getNutritionRouter, getIntakeRouter } = require('./routes/getUserData');

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 4002;

app.use(express.static(path.join(__dirname,'..','public/')));


app.post("/addUser", addUserRouter);
app.post("/process/login", loginRouter);
app.post("/hate", hateRouter);
app.post("/getNutrition", getNutritionRouter);
app.post("/getIntake",getIntakeRouter);

app.use("/",router);

app.listen(PORT,() => {
  console.log('Check out the app at https://localhost:' + PORT);
});