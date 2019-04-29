var expect = require('expect');
var actions = require('actions');

describe('Actions', () => {
  it('should generate search text actions', () => {
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some search text'
    };

    var res = actions.setSearchText(action.searchText);
    expect(res).toEqual(action);
  });
});
