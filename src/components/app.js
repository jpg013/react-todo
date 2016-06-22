import React from 'react';
import TodosList from './todos-list';
import CreateToDo from './create-todo';

const todos = [
  {
    task: 'make react tutorial',
    isCompleted: false
  },
  {
    task: 'eat dinner',
    isCompleted: true
  }
];

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          todos
        };
    }
    render() {
        return (
          <div>
            <h1>React ToDos App</h1>
            <CreateToDo></CreateToDo>
            <TodosList todos={this.state.todos}></TodosList>
          </div>);
    }
}
