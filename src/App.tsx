import { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<'all' | 'completed' | 'pending'>('all');

  useEffect(() => {
    const saved = localStorage.getItem('todos');
    if (saved) setTodos(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAdd = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleToggle = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'pending') return !todo.completed;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-300 px-4 py-10">
      <div className="max-w-md mx-auto bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl relative">
        <button
          onClick={() => document.documentElement.classList.toggle('dark')}
          className="absolute top-3 right-3 bg-gray-300 dark:bg-gray-700 text-sm px-3 py-1 rounded-full"
        >
          🌓
        </button>

        <h1 className="text-2xl font-bold mb-4 text-center">📝 Simple Todo App</h1>

        <TodoForm onAdd={handleAdd} />

        <div className="flex justify-center gap-2 mt-4 text-sm">
          <button onClick={() => setFilter('all')} className="hover:underline">All</button>
          <button onClick={() => setFilter('completed')} className="hover:underline">Completed</button>
          <button onClick={() => setFilter('pending')} className="hover:underline">Pending</button>
        </div>

        <TodoList todos={filteredTodos} onDelete={handleDelete} onToggle={handleToggle} />
      </div>
    </div>
  );
}

export default App;
