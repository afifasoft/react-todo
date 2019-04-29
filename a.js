var reduxState = {
  searchText : 'Dog',
  showCompleted: false,
  todos: [{
    id: '123',
    text: 'Walk the Dog'
  }]
};


var action = {
  type : 'CHANGE_SEARCH_TEXT',
  searchText: 'something else'
}
