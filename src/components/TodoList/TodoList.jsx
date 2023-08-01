import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import styles from './TodoList.module.css';

function TodoList({ todos }) {
  return (
    <ul className={styles.ul}>
      {todos.length ? (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            name={todo.name}
            isCompleted={todo.isCompleted}
          />
        ))
      ) : (
        <p>Nothing to display</p>
      )}
    </ul>
  );
}

export default TodoList;
