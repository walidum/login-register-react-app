import React from 'react'
import {BrowserRouter as Router, Switch, Route,Redirect, BrowserRouter} from 'react-router-dom'
import About from './pages/About';
import Home from './pages/Home'
import Login from './pages/Login';
import Register from "./pages/Register";



function App() {
  return (
    <BrowserRouter>
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home"/>
        </Route>
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
      </Switch>
    </Router>
    </BrowserRouter>
  );
}

export default App;
