import React from 'react';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './Home';
import './App.css';
import View from './View';


function App() {
return (
  <Router>
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/View">
            <View />
       
          </Route>
        </Switch>
      </div>
    </Router>
         
);
};

export default App