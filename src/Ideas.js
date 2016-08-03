import React, { Component } from 'react'
import IdeaActions from './actions'

class Ideas extends Component {
  constructor() {
    super()
    this.actions      = new IdeaActions()
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete(index) {
    this.props.dispatch(this.actions.deleteIdea(index))
  }

  ideasLoader() {
    return this.props.ideas.map((idea, index) => {
      return (
        <div key={index}>
          <h1>Title</h1>
          <h3>{idea.title}</h3>
          <h1>Body</h1>
          <h3>{idea.body}</h3>
          <button onClick={this.handleDelete.bind(null, index)}>
            Delete
          </button>
        </div>
      )
    })
  }

  render() {
    return (
      <div >
        {this.ideasLoader()}
      </div>
    )
  }
}

export default Ideas