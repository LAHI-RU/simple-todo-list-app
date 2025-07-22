import TodoItem from './TodoItem';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface Props {
  todos: Todo[];
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

const TodoList = ({ todos, onDelete, onToggle }: Props) => {
  return (
    <ul className="mt-6">
      {todos.length === 0 ? (
        <p className="text-center text-gray-400">No tasks yet</p>
      ) : (
        todos.map(todo => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            completed={todo.completed}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        ))
      )}
    </ul>
  );
};

export default TodoList;
