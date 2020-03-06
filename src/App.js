import React, { useState } from 'react';
import SignUp from './components/SignUp';
import Login from './components/Login';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./routes/Home";
import AddButton from "./components/AddButton";

function App() {
  const [isLogin, setLog] = useState(false);

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
