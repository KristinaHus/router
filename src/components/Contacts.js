import React, { Component } from 'react'
import { Link, Route, Prompt } from 'react-router-dom'

class Contacts extends  Component {
  render() {
    return (
      <div>
        <p>Contacts Page</p>
        <div className='contacts-links'>
          <Link to='/contacts/email'>Email</Link>
          <Link to='/contacts/phone'>Phone number</Link>
        </div>
        <div className='contacts-routes'>
          <Route path='/contacts/email' render={() => <div>kina@yopmail.com</div>}/>
          <Route path='/contacts/phone' render={() => <div>0939053169</div>} />
          <button onClick={() => this.props.history.push({pathname:'/about-us', state: {prevState: 'contacts'}})}>Go to about us</button>
          <Prompt message="Are you sure you want to leave?"/>
        </div>
      </div>
    )
  }
}

export default Contacts
