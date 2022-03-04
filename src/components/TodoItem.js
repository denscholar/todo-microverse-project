/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import styles from './TodoItem.module.css';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    };
  }

  handleEditing = () => {
    this.setState({
      editing: true,
    });
  }

  handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      this.setState({ editing: false });
    }
  }

  render() {
    const viewMode = {};
    const editMode = {};

    if (this.state.editing) {
      viewMode.display = 'none';
    } else {
      editMode.display = 'none';
    }
    const completedStyle = {
      fontStyle: 'italic',
      color: '#595959',
      opacity: 0.4,
      textDecoration: 'line-through',
    };
    const { completed, id, title } = this.props.todo;
    const { handleChangeProps } = this.props;
    const { deleteTodoProps } = this.props;
    return (
      <li className={styles.item}>
        <div onDoubleClick={this.handleEditing} style={viewMode}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={completed}
            onChange={() => handleChangeProps(id)}
          />
        </div>
        <input
          type="text"
          className={styles.textInput}
          value={title}
          style={editMode}
          onChange={(e) => {
            this.props.setUpdate(e.target.value, id);
          }}
          onKeyDown={this.handleUpdatedDone}
        />
        <button type="button" onClick={() => deleteTodoProps(id)}>Delete</button>
        <span style={completed ? completedStyle : null}>
          {title}
        </span>
      </li>
    );
  }
}

export default TodoItem;
