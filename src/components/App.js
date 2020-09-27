import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ContainerHelpers from '../Helpers/ContainerHelpers';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Resume from './Resume';

function App() {
  const [redirect, setRedirect] = React.useState(false);

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          component={ContainerHelpers(Home, { redirect, setRedirect })}
        />
        <Route
          path="/about"
          component={ContainerHelpers(About, { redirect, setRedirect })}
        />
        <Route
          path="/resume"
          component={ContainerHelpers(Resume, { redirect, setRedirect })}
        />
        <Route
          path="/contact"
          component={ContainerHelpers(Contact, { redirect, setRedirect })}
        />
      </Switch>
    </Router>
  );
}

export default App;
