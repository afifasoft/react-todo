var React = require('react');
var createReactClass = require('create-react-class');

var AddTodo = createReactClass({

  handleSubmit: function (e) {
    e.preventDefault();
    var todoText = this.refs.todoText.value;

    if(todoText.length > 0) {
      this.refs.todoText.value = '';
      this.props.onAddTodo(todoText);
    } else {
      this.refs.todoText.focus();
    }
  },

  render: function () {
    return (
      <div className="container__footer">
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="todoText" placeholder="What do you need to do"/>

          <button className="button expanded">Create Task</button>

        </form>
      </div>
    );
  }
});


module.exports = AddTodo;
