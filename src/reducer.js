const ideasChanger = (state = [], action) => {
  switch(action.type) {
    case 'ADD_IDEA': 
      const newIdea = { 
        title: action.ideaTitle,
        body: action.ideaBody,
        id: action.ideaId
      }
      const newIdeas = [...state.ideas.slice(0)]
      newIdeas.unshift(newIdea)
      return {...state, ideas: newIdeas}
    case 'DELETE_IDEA':
      let currentIdeas = [...state.ideas.slice(0)]
      currentIdeas.splice(action.index, 1)
      return {...state, ideas: currentIdeas}
    default:
      return {...state, ideas: []}
  }
}

export default ideasChanger