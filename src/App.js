import React from 'react';
import SignUp from './SignUp';
//import Home from './Home';
import './App.css';
import { Route,Link,Switch } from 'react-router-dom';
import NavigationBar from "./components/NavigationBar";
import Home from "./routes/Home";


function App (){

  
  return (
    <div>
      <NavigationBar/>
      <Switch>
        <Route path = "/" component = {Home} exact/>
        {/* <Route path = "/login" component = {Login}/> */}
        <Route path = "/SignUp" component ={SignUp} />
      </Switch>
        
    </div>
  );
}



export default App;
