import React from 'react';
import _ from 'lodash';
import TodosListHeader from './todos-list-header';
import TodosListItem from './todos-list-item';

export default class TodosList extends React.Component {
    renderItems() {
        return this.props.todos.map((todo, index) => <TodosListItem key={index} {...todo}></TodosListItem>);
    }

    render() {
        return (
            <table>
              <TodosListHeader></TodosListHeader>
              <tbody>
                  {this.renderItems()}
              </tbody>
            </table>
        );
    }
}
