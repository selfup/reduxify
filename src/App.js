import React, { Component } from 'react'
import { connect } from 'react-redux'
import IdeaActions from './actions'
import Ideas from './Ideas'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.actions = new IdeaActions()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const ideaTitle = this.refs.ideaTitle.value
    const ideaBody  = this.refs.ideaBody.value
    this.props.dispatch(this.actions.addIdea(ideaTitle, ideaBody))
  }

  render() {
    return (
      <div className="App">
        <input type="text" ref="ideaTitle" className="idea" />
        <input type="text" ref="ideaBody" className="idea" />
        <input 
          type="submit" 
          ref="submit-idea" 
          onClick={this.handleClick}
        /> 
        <Ideas 
          ideas={this.props.ideas} 
          dispatch={this.props.dispatch} 
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({ideas: state.ideas})

const mapDispatchToProps = dispatch => ({dispatch: dispatch})

export default connect(mapStateToProps, mapDispatchToProps)(App)
