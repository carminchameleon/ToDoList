import { ITodo } from '../../types';

interface ToDoListItemProps {
  todo: ITodo;
}

const ToDoListItem: React.FC<ToDoListItemProps> = ({ todo }) => {
  return (
    <li>
      <label>
        <input type='checkbox' checked={todo.completed} />
        {todo.text}
      </label>
    </li>
  );
};

export default ToDoListItem;
