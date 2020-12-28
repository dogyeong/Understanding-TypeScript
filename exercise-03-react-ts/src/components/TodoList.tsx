import React from 'react';

type Todo = {
  id: string;
  text: string;
};

type TodoListType = {
  todos: Todo[];
};

function TodoList({ todos }: TodoListType) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}

export default TodoList;
