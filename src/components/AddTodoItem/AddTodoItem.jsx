import React, { useState } from 'react';
import styles from './AddTodoItem.module.css';

function AddTodoItem({ addTodo }) {
  const [newTodo, setNewTodo] = useState('');

  function handleChange(e) {
    setNewTodo(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo('');
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className="visually-hidden">Add to do</label>
      <input type="text" onChange={handleChange} value={newTodo} />
      <button>Add todo</button>
    </form>
  );
}

export default AddTodoItem;
