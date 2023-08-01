import React from 'react';
import styles from './TodoItem.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

function TodoItem({ id, name, isCompleted, handleCheck, handleDelete }) {
  return (
    <li className={styles.li}>
      <input
        type="checkbox"
        id={id}
        defaultChecked={isCompleted}
        onChange={() => handleCheck(id)}
      />
      <label htmlFor={id}>{name}</label>
      <FontAwesomeIcon
        icon={faPenToSquare}
        role="button"
        tabIndex="0"
        aria-label={`Edit ${name}`}
      />
      <FontAwesomeIcon
        icon={faTrash}
        className={styles['delete-icon']}
        role="button"
        tabIndex="0"
        aria-label={`Edit ${name}`}
        onClick={() => handleDelete(id)}
      />
    </li>
  );
}

export default TodoItem;
