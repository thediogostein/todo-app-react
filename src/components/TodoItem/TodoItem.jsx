import React from 'react';
import styles from './TodoItem.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

function TodoItem({ id, name, isCompleted }) {
  return (
    <li className={styles.li}>
      <input type="checkbox" id={id} />
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
      />
    </li>
  );
}

export default TodoItem;
