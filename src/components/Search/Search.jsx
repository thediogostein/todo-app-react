import React from 'react';
import styles from './Search.module.css';

function Search({ searchQuery, setSearchQuery }) {
  return (
    <div className={styles.search}>
      <input
        type="search"
        placeholder="Search for todos"
        onChange={(e) => setSearchQuery(e.target.value)}
        value={searchQuery}
      />
    </div>
  );
}

export default Search;
