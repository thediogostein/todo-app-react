import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import styles from './TodoList.module.css';

function TodoList({ todos, handleCheck, handleDelete, handleEdit }) {
  return (
    <ul className={styles.ul}>
      {todos.length ? (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            name={todo.name}
            isCompleted={todo.isCompleted}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))
      ) : (
        <p>Nothing to display</p>
      )}
    </ul>
  );
}

export default TodoList;
