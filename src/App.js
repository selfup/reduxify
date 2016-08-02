import React, { Component } from 'react'
import { connect } from 'react-redux'
import logo from './logo.svg'
import addIdea from './actions'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.preventDefault()
    const ideaContent = this.refs.idea.value
    console.log("IN ONCLICK: " + this.props.ideas)
    this.props.dispatch(addIdea(ideaContent))
  }

  render() {
    return (
      <div className="App">
        <input type="text" ref="idea" className="idea" />
        <input 
          type="submit" 
          ref="submit-idea" 
          onClick={this.handleClick}
        /> 
      </div>
    )
  }
}

const mapStateToProps = state => ({ideas: state.ideas})

const mapDispatchToProps = dispatch => ({dispatch: dispatch})

export default connect(mapStateToProps, mapDispatchToProps)(App)
