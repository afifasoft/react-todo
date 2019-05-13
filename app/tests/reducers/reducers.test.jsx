var expect = require('expect');

var reducers = require('reducers');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        serachText: 'dog'
      };

      var res = reducers.searchTextReducer('',action);
      expect(res).toEqual(action.searchText);
    });
  });

  // Test that the showCompleted status gets flipped

  describe('showCompletedReducer', () => {
    it('should toggle showCompleted', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };

      var res = reducers.showCompletedReducer(false, action);
      expect(res).toEqual(true);
    });
  });
});
