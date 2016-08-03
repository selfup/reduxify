class IdeaActions {
  constructor() {
    this.addIdea    = this.addIdea.bind(this)
    this.deleteIdea = this.deleteIdea.bind(this)
  }
  addIdea(title, body) {
    return {
      type: 'ADD_IDEA',
      ideaTitle: title,
      ideaBody: body,
      ideaId: new Date()
    }
  }

  deleteIdea(index) {
    return {
      type: 'DELETE_IDEA',
      index: index
    }
  }
}

export default IdeaActions
