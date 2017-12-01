import React, { Component } from 'react'

class AboutUs extends  Component {
  constructor (props) {
    super(props)
    window.props = this.props
    console.log('this.props', this.props)
  }
  render () {
    return (
      <div>
        <p>About us page</p>
      </div>

    )
  }
}

export default AboutUs