import { useState } from "react";

interface TodoListProps {
  list: string;
  completeItem(itemName: string): void;
}

const TodoList: React.FC<TodoListProps> = ({
  list,
  completeItem,
}) => {
  const [completed, setCompleted] = useState(false);

  const onItemComplete = () => {
    if (completed !== false) {
      setCompleted(false);
    } else {
      setCompleted(true);
    }
  };

  return (
    <div className='level'>
      <input
        type='radio'
        className={
          "button level-left " + (completed ? "is-success" : "")
        }
        onClick={onItemComplete}
      />
      <div>{list}</div>
      <div>
        <button onClick={() => completeItem(list)}>delete</button>
      </div>
    </div>
  );
};

export default TodoList;
