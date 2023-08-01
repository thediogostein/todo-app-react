import React from 'react'
import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <div className='wrapper'>
        <h1>Todo App</h1>
      </div>
    </header>
  )
}

export default Header