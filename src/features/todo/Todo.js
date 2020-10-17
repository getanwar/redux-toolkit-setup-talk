import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos, addTodoAsync, toggleTodo } from "./todoSlice";

function Todo(props) {
  const [input, setInput] = useState("");
  const todos = useSelector(getTodos);
  const dispatch = useDispatch();

  const handleAddTodo = React.useCallback(() => {
    dispatch(addTodoAsync(input));
    setInput("");
  }, [dispatch, input]);

  const handleToggleTodo = React.useCallback(
    (index) => {
      dispatch(toggleTodo({ index }));
    },
    [dispatch]
  );

  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <br />
      <button onClick={handleAddTodo}>Add Todo</button>
      <hr />
      <ul>
        {todos.map((todo, idx) => (
          <li key={idx}>
            <span
              style={{ textDecoration: todo.completed ? "line-through" : "" }}
            >
              {todo.text}
            </span>{" "}
            <button onClick={() => handleToggleTodo(idx)}>
              {todo.completed ? "Unfinish" : "Finish"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
