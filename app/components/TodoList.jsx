var React = require('react');
var {connect} = require('react-redux');
var createReactClass = require('create-react-class');

import Todo from 'Todo';

export var TodoList = createReactClass({
  render: function () {
    var {todos} = this.props;
    var renderTodos = () => {

      if (todos.length === 0) {
        return (
          <p className="container__message">Nothing To Do</p>
        );
      }

      return todos.map( (todo) => {
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
    return {
      todos: state.todos
    };
  }
)(TodoList);
