import React, { Component } from 'react'

export default class UserName extends Component {
  componentWillMount () {
    console.log('will mount')
  }
  componentDidMount () {
    console.log('did mount')
  }
  componentWillReceiveProps (nextProps, nextState) {
    console.log('will receive props', this.props.name, nextProps.name)
  }
  componentDidUpdate (prevProps, prevState) {
    console.log('did update', this.props.name, prevProps.name)
  }
  // shouldComponentUpdate (nextProps, nextState) {
  //   if (nextProps.name.length % 3 !== 0) {
  //     console.log('%3')
  //     return false
  //   } else {
  //     return true
  //   }
  // }
  componentWillUnmount() {

  }

  render () {
    if (this.props.name) {
      return (
        <div>{this.props.name}</div>
      )
    } else {
      return (
        <div>
          <p>No name</p>
          <button onClick={() =>
              this.props.updateNameCallback(
                'Sergey Test #' +
                ((Math.random() * 100) | 0)
              )
            }
          >Generate name</button>
        </div>
      )
    }
  }
}
