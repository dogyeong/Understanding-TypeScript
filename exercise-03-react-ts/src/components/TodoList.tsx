import React from 'react';
import { Todo } from '../todo.model';

type TodoListProps = {
  todos: Todo[];
};

function TodoList({ todos }: TodoListProps) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}

export default TodoList;
