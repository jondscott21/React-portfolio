import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom'
// import {useSelect, useDispatch} from 'react-redux';
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Resume from './components/Resume'
import { StyledHeader, StyledLink } from './styles/HeaderStyle'
import '@fortawesome/fontawesome-free'

function App() {
  // const state = useSelect(state => state)
  // const dispatch = useDispatch()
  return (
    <div className="App">
      <StyledHeader>
        <StyledLink activeStyle={{background: '#acdbdf', color: 'black'}} to='/about'>About</StyledLink>
        <StyledLink activeStyle={{background: '#acdbdf', color: 'black'}} to='/projects'>Projects</StyledLink>
        <StyledLink activeStyle={{background: '#acdbdf', color: 'black'}} to='/skills'>Skills</StyledLink>
        <StyledLink activeStyle={{background: '#acdbdf', color: 'black'}} to='/contact'>Contact</StyledLink>
        <StyledLink activeStyle={{background: '#acdbdf', color: 'black'}} to='/resume'>Resume</StyledLink>
        <i class="fab fa-github-square"></i>
      </StyledHeader>
      <div className="App-landing"></div>
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
  );
}

export default App;
