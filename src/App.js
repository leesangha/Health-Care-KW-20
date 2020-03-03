import React from 'react';
import SignUp from './SignUp';
import Login from './Login';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./routes/Home";
import AddButton from "./components/AddButton";

function App() {
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
