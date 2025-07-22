interface Props {
  id: number;
  text: string;
  completed: boolean;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

const TodoItem = ({ id, text, completed, onDelete, onToggle }: Props) => {
  return (
    <li
      className={`flex justify-between items-center px-4 py-2 mb-2 rounded-md
        bg-gray-100 dark:bg-gray-700 transition-all duration-300
        ${completed ? 'line-through opacity-60' : ''}`}
    >
      <span onClick={() => onToggle(id)} className="cursor-pointer flex-1">
        {text}
      </span>
      <button onClick={() => onDelete(id)} className="text-red-500 hover:text-red-700">
        ❌
      </button>
    </li>
  );
};

export default TodoItem;
