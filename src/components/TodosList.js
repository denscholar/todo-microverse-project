/* eslint-disable react/prop-types */

import React from 'react';
import TodoItem from './TodoItem';

class TodosList extends React.Component {
  constructor(props) {
    super(props);
    this.state = null;
  }

  render() {
    const { handleChangeProps, deleteTodoProps, setUpdate } = this.props;
    const { todos } = this.props;
    return (
      <div>
        <ul>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleChangeProps={handleChangeProps}
              deleteTodoProps={deleteTodoProps}
              setUpdate={setUpdate}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default TodosList;
