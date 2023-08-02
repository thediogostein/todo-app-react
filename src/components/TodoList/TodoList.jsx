import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import styles from './TodoList.module.css';

function TodoList({
  todos,
  handleCheck,
  handleDelete,
  handleEdit,
  searchQuery,
}) {
  return (
    <ul className={styles.ul}>
      {todos.length ? (
        todos
          .filter((todo) =>
            todo.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((todo) => (
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
        <p>No todos. Add some, maybe?</p>
      )}
    </ul>
  );
}

export default TodoList;
