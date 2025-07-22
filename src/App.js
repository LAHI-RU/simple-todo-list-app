import React, { useState } from 'react';
import './App.css';

function App() {

  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if(inputValue.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        text: inputValue,
        completed: false
      };
      setTodos([...todos, newTodo]);
      setInputValue('');
    }
  };

  return (
    <div className="App">
      <h1>My Todo App</h1>

      <div>
        <input
          type='text'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder='Add a new todo..'
        />
        <button>Add</button>
      </div>



    </div>

  );
}

export default App;
