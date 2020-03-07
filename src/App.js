import React, { useState,useEffect } from 'react';
import SignUp from './components/SignUp';
import Login from './components/Login';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./routes/Home";
import AddButton from "./components/AddButton";
import recommend from "./recommendation-model/recommend";

function App() {
  const UserInfo = sessionStorage.getItem('info');
  const [isLogin, setLog] = useState(sessionStorage.getItem('isLogin'));
  useEffect(() => {
    if(UserInfo){
      console.log(`로그인 정보있음 ${UserInfo}`);
    }
    else 
    console.log('fail');
    //Login 검사 

    // 선호도 검사
    // recommend();
  },[UserInfo]);

  return (
    <>
      {isLogin ? (
        <>
          <Header />
          <AddButton/>
        </>
      ) : null}
      <Switch>
        <Route exact path="/" render={
          (props) => <Home {...props} isLogin={isLogin} />
        } />
        <Route path="/SignUp" component={SignUp}/>
        <Route path="/Login" render={
          (props) => <Login {...props} setLog={setLog} />
        } />
      </Switch>
    </>
  );
}

export default App;
