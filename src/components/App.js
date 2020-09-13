import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import ResponsiveSideBar from '../Helpers/ResponsiveSideBar';
import Course from './Course';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Certificat from './Certificat';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ResponsiveSideBar(Home)} />
        <Route path="/Parcours" component={ResponsiveSideBar(Course)} />
        <Route path="/Contact" component={ResponsiveSideBar(Contact)} />
        <Route path="/Portfolio" component={ResponsiveSideBar(Portfolio)} />
        <Route path="/Certificats" component={ResponsiveSideBar(Certificat)} />
      </Switch>
    </Router>
  );
}

export default App;
