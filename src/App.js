import React ,{useEffect} from 'react';
import SignUp from './components/SignUp';
import Login from './components/Login';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./routes/Home";
import AddButton from "./components/AddButton";

function App() {
  
  const UserInfo = localStorage.getItem('info');

  useEffect(() => {
    if(UserInfo)
    console.log(`로그인 완료 ${UserInfo}`);
    else 
    console.log('fail');

    //Login 검사 
    //true => Sign in -> My page 
    //false => return state;

    //선호도 검사 
  },[])

  return (
    <div>
      <Header/>
      <Switch>
        <Route path = "/" component = {Home} exact/>
        <Route path = "/SignUp" component ={SignUp}/>
        <Route path = "/Login" component = {Login}/>
      </Switch>
      <AddButton/>
    </div>
  );
}

export default App;
