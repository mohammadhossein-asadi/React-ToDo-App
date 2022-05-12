import { v4 as uuidv4 } from "uuid";

const Todo = (text) => {
  return (
    <div className="todo">
      <li key={uuidv4()} className="todo-item">
        {text}
      </li>
      <button className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
