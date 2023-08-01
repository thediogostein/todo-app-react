import React, { useState } from 'react';
import styles from './TodoItem.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

function TodoItem({
  id,
  name,
  isCompleted,
  handleCheck,
  handleDelete,
  handleEdit,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState('');

  function handleChange(e) {
    setNewName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleEdit(id, newName);
    setNewName('');
    setIsEditing(false);
  }

  const editingTemplate = (
    <>
      <form className={styles.editingTemplate} onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
        <button onClick={() => setIsEditing(false)}>Cancel</button>
        <button>Save</button>
      </form>
    </>
  );

  const viewTemplate = (
    <div className={styles.viewTemplate}>
      <input
        type="checkbox"
        id={id}
        defaultChecked={isCompleted}
        onChange={() => handleCheck(id)}
        value={newName}
      />
      <label htmlFor={id}>{name}</label>
      <FontAwesomeIcon
        icon={faPenToSquare}
        role="button"
        tabIndex="0"
        aria-label={`Edit ${name}`}
        onClick={() => setIsEditing(true)}
      />
      <FontAwesomeIcon
        icon={faTrash}
        className={styles['delete-icon']}
        role="button"
        tabIndex="0"
        aria-label={`Edit ${name}`}
        onClick={() => handleDelete(id)}
      />
    </div>
  );
  return <li>{isEditing ? editingTemplate : viewTemplate}</li>;
}

export default TodoItem;
