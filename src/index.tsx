import "bulmaswatch/pulse/bulmaswatch.min.css";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const [item, setItem] = useState("");
  const [todoList, setTodoList] = useState<string[]>([]);

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(todoList));
  }, [todoList]);

  const onClick = () => {
    setItem("");
    setTodoList([...todoList, item]);
    console.log(todoList);
  };

  const completedItem = (itemName: string): void => {
    setTodoList(
      todoList.filter((item) => {
        return item !== itemName;
      }),
    );
  };

  return (
    <div className='container'>
      <div style={{ backgroundColor: "purple" }}>
        <h3 className='title is-3'>My Todo List </h3>

        <div className='level field has-addons center'>
          <div className='container is-fluid control'>
            <input
              className='input is-medium'
              type='text'
              placeholder='enter an item'
              value={item}
              onChange={(e) => setItem(e.target.value)}
            />
          </div>
          <div className='control'>
            <button
              className='button is-black is-medium'
              onClick={onClick}
            >
              add to list
            </button>
          </div>
        </div>
      </div>

      <div>
        <ul>
          {todoList.map((item) => {
            return (
              <li key={item}>
                <TodoList completeItem={completedItem} list={item} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
