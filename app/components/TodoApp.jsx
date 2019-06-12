var React = require('react');
var createReactClass = require('create-react-class');

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';

import TodoSearch from 'TodoSearch';
//var TodoSearch = require('TodoSearch');

var uuid = require('node-uuid');

var moment = require('moment');

var TodoApp = createReactClass({
  render: function () {

    return (
      <div>
        <h1 className="page-title">My Task </h1>

        <div className="row">
            <div className="column small-centered small-11 medium-6 large-5">
              <div className="container">
                <TodoSearch />
                <TodoList/>
                <AddTodo />
              </div>
            </div>
        </div>
      </div>
    );
  }
});


module.exports = TodoApp;
