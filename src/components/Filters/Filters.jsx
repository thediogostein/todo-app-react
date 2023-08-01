import React from 'react'
import styles from './Filters.module.css'

function Filters() {
  return (
    <div className={styles.filters}>
      <button>All</button>
      <button>Completed</button>
      <button>Todo</button>
    </div>
  )
}

export default Filters