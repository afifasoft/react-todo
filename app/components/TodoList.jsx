var React = require('react');
var {connect} = require('react-redux');
var createReactClass = require('create-react-class');

import Todo from 'Todo';
var TodoAPI = require('TodoAPI');

export var TodoList = createReactClass({
  render: function () {
    var {todos, showCompleted, searchText} = this.props;
    var renderTodos = () => {

      if (todos.length === 0) {
        return (
          <p className="container__message">Nothing To Do</p>
        );
      }

      return TodoAPI.filterTodos(todos, showCompleted, searchText).map( (todo) => {
        return (
          <Todo key={todo.id} {...todo}/>
        );
      });
    };
    return (
      <div>
        {renderTodos()}
      </div>
    );
  }

});

export default connect(
  (state) => {
    return state;

  }
)(TodoList);
