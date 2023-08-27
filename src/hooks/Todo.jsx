import React from "react";
import { ACTIONS } from "./UseReducerExample.jsx";

const Todo = ({ todo, dispatch }) => {
  return (
    <li className="list-group-item d-flex align-items-center justify-content-around" style={{ width: "100%" }}>
      <div style={{ width: "60%" }}>
        <span
          style={{
            background: todo.complete ? "#aaa" : "",
            padding: "5px 15px",
            borderRadius: "6px",
          }}
        >
          {todo.name}
        </span>
      </div>
      <div style={{ width: "40%" }}>
        <button
          className="btn btn-warning"
          onClick={() =>
            dispatch({
              type: ACTIONS.TOGGLE_TODO,
              payload: { id: todo.id },
            })
          }
        >
          Done
        </button>
        &nbsp;&nbsp;
        <button
          className="btn btn-danger"
          onClick={() =>
            dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })
          }
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Todo;
