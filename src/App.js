import React from 'react'
import {BrowserRouter as Router, Switch, Route, BrowserRouter} from 'react-router-dom'
import About from './pages/About';
import Home from './pages/Home'
import Login from './pages/Login';



function App() {
  return (
    <BrowserRouter>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/login" component={Login}/>
      </Switch>
    </Router>
    </BrowserRouter>
  );
}

export default App;
