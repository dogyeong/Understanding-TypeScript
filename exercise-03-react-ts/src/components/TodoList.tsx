import React from 'react';
import { Todo } from '../todo.model';
import './TodoList.css';

type TodoListProps = {
  todos: Todo[];
  onDeleteTodo: (id: string) => void;
};

function TodoList({ todos, onDeleteTodo }: TodoListProps) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button type="button" onClick={() => onDeleteTodo(todo.id)}>
            DELETE
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
