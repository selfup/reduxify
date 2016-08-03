import React, { Component } from 'react'

class Ideas extends Component {
  ideasLoader() {
    console.log("IN IDEAS WOW OK LOADER LOADING", this.props)
    return this.props.ideas.map((idea, index) => {
      return (
        <div key={index}>
          <h1>{idea}</h1>
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