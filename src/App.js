import React from 'react';
import SignUp from './SignUp';
import Login from './Login';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';
import NavigationBar from "./components/NavigationBar";
import Home from "./routes/Home";

function App() {
  return (
    <div>
      <NavigationBar/>
      <Switch>
        <Route path = "/" component = {Home} exact/>
        <Route path = "/SignUp" component ={SignUp}/>
        <Route path = "/Login" component = {Login}/>
      </Switch>
    </div>
  );
}



export default App;
