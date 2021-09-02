import React from "react"
import './App.css';
import {Switch, Route} from "react-router-dom"
import Home from "./user/Home";
import View from "./user/View";
import Adduser from "./user/Adduser";
import EditUser from "./user/EditUser";

const App = () => {
 
  return (
    <>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/view/:id" component={View}/>
      <Route exact path="/add" component={Adduser}/>
      <Route exact path="/edit/:id" component={EditUser}/>
    </Switch>
    </>
  );
}

export default App;
