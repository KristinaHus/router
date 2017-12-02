import React, { Component } from 'react'
import { HashRouter, Route, Link, NavLink, Switch, Redirect } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'

import Home from './components/Home'
import Contacts from './components/Contacts'
import AboutUs from './components/AboutUs'

import UserName from './components/UserName'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: ''
    }

    this.updateName = this.updateName.bind(this)
  }

  updateName(value) {
    this.setState((prevState) => {
      return {
        name: value,
        toggle: !prevState.toggle
      }
    }, () => {
      // new this.state
    })
    // old this.state
  }

  render() {
    return (
      <HashRouter>
        <div className='App'>
          <header className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <h2>Welcome to React</h2>
          </header>
          <nav className='nav'>
            <NavLink exact activeClassName='active' to='/'>Home</NavLink>
            <NavLink activeClassName='active' to='/about-us'>About Us</NavLink>
            <NavLink activeClassName='active' to='/contacts'>Contacts</NavLink>
          </nav>
          <main className='main-content'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about-us' component={AboutUs} />
            <Route path='/contacts' component={Contacts} />
            <Route path='*' render={(match) => {
              console.log('arguments', match)
              if (match.location.pathname === '/about') {
                return (
                  <Redirect to='/about-us'/>
                )
              }
              return (
                <div>Page not found</div>
              )
            }}/>
            </Switch>
            {/*<input
              type='text'
              value={this.state.name}
              onChange={(e) => {this.setState({name: e.target.value})}}
            />
            <UserName
              name={this.state.name}
              updateNameCallback={this.updateName}
            />*/}
          </main>
        </div>
      </HashRouter>
    )
  }
}

export default App
