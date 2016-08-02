const ideasChanger = (state, action) => {
  console.log(state)
  switch(action.type) {
    case 'ADD_IDEA':
    console.log("IN ADD_IDEA", action.idea)
      return {...state, ideas: action.idea}
    default:
      return {...state, ideas: []}
  }
}

export default ideasChanger