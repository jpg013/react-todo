import React from 'react';

export default class CreateToDo extends React.Component {
    render() {
        return(
            <form>
              <input type='text' placeholder='what do i need to do?'></input>
              <button>Create</button>
            </form>
        );
    }
}
