const ideasChanger = (state = [], action) => {
  switch(action.type) {
    case 'ADD_IDEA': 
      const newIdeas = state.ideas.concat([action.idea])
      return {...state, ideas: newIdeas}
    default:
      return {...state, ideas: []}
  }
}

export default ideasChanger