import React, { Component } from 'react'
import { HashRouter, Route, NavLink, Switch, Redirect } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'

import Home from './components/Home'
import Contacts from './components/Contacts'
import AboutUs from './components/AboutUs'

class App extends Component {
  render() {
    return (
      <HashRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </header>
        <nav className='nav'>

        </nav>
        <main className='main-content'>

        </main>
      </div>
      </HashRouter>
    );
  }
}

export default App;
