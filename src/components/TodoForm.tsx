import { useState } from 'react';

interface Props {
  onAdd: (text: string) => void;
}

const TodoForm = ({ onAdd }: Props) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onAdd(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mt-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a task..."
        className="flex-1 px-3 py-2 rounded-md bg-gray-200 dark:bg-gray-700 text-black dark:text-white outline-none"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
