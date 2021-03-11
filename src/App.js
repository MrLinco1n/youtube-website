import React from "react";
import "./App.css";
import Navbar from './components/Navbar'
import Home from './components/pages/Home'
import Capsules from './components/pages/Capsules'
import Powders from './components/pages/Powders'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      
      <Switch>
      <Route path='/' exact component={Home}/>
      </Switch>
      <Switch>
      <Route path='/Capsules' exact component={Capsules}/>
      </Switch>
       <Switch>
      <Route path='/Powders' exact component={Powders}/>
      </Switch>
      </Router>

    </>
  );
}

export default App;
