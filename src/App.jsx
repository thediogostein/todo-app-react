import { useEffect, useState } from 'react';
import AddTodoItem from './components/AddTodoItem/AddTodoItem';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
import Search from './components/Search/Search';

import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js';
import './global.css';

// const todosData = [
//   { id: 'todo-0', name: 'Comprar picanha', isCompleted: false },
//   { id: 'todo-1', name: 'Comprar arroz', isCompleted: true },
//   { id: 'todo-2', name: 'Comprar feijão', isCompleted: false },
// ];

function App() {
  const [data, setData] = useState(JSON.parse(localStorage.getItem('data')));
  const [searchQuery, setSearchQuery] = useState('');

  function addTodo(name) {
    const newTodo = {
      id: `todo-${nanoid()}`,
      name,
      isCompleted: false,
    };
    setData((prevData) => [newTodo, ...prevData]);
  }

  function handleCheck(id) {
    const updatedTodos = data.map((todo) =>
      id === todo.id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setData(updatedTodos);
  }

  function handleDelete(id) {
    const remainingTodos = data.filter((todo) => todo.id !== id);
    setData(remainingTodos);
  }

  function handleEdit(id, newName) {
    const updatedTodos = data.map((todo) =>
      todo.id === id ? { ...todo, name: newName } : todo
    );
    setData(updatedTodos);
  }

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data));
  }, [data]);

  return (
    <>
      <Header />
      <main className="wrapper">
        <AddTodoItem addTodo={addTodo} />
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <TodoList
          todos={data}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          searchQuery={searchQuery}
        />
      </main>
    </>
  );
}

export default App;
