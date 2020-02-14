import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Resume from './components/Resume'
import Header from './components/Header'


function App() {

  return (
    <div className="App">
      <Header /> 
      <div className="App-landing">
        <Switch>
          <Route exact path="/" >
            <Redirect to='/about' />
          </Route>
          <Route exact path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/skills" component={Skills} />
          <Route path="/contact" component={Contact} />
          <Route path="/resume" component={Resume} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
