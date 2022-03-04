/* eslint-disable no-param-reassign */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodosList from './TodosList';
import Header from './Header';
import InputTodo from './InputTodo';

class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((data) => this.setState({ todos: data }));
  }

  // toggle the checkbox
  handleChange = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };

  // delete todo

  delTodo = (id) => {
    this.setState((prevState) => ({
      todos: [
        ...prevState.todos.filter((todo) => todo.id !== id),
      ],
    }));
  };

   // Add todo to list
   addTodoItem = (title) => {
     const newTodo = {
       id: uuidv4(),
       title,
       completed: false,
     };
     this.setState((prevState) => ({
       todos: [...prevState.todos, newTodo],
     }));
   };

   // Editing todo
   setUpdate = (updatedTitle, id) => {
     this.setState((prevState) => ({
       todos: prevState.todos.map((todo) => {
         if (todo.id === id) {
           todo.title = updatedTitle;
         }
         return todo;
       }),
     }));
   }

   render() {
     return (
       <div className="container">
         <div className="inner">
           <Header />
           <InputTodo addTodoProps={this.addTodoItem} />
           <TodosList
             todos={this.state.todos}
             handleChangeProps={this.handleChange}
             deleteTodoProps={this.delTodo}
             setUpdate={this.setUpdate}
           />
         </div>
       </div>
     );
   }
}
export default TodoContainer;
