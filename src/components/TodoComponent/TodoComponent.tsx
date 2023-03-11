import React from "react";
import "./TodoComponent.scss";
import { TodoType } from "../../pages/TodoPage/TodoPage";

type TodoProps = TodoType & {
  toggleDone: (id: number) => void,
  deleteTodo: (id: number) => void,
};

function TodoComponent({ id, todo, isDone, toggleDone, deleteTodo }: TodoProps) {
  return (
    <>
      <li
        className={isDone ? "done" : ""}
        onClick={() => {
          toggleDone(id);
        }}
      >
        <p>{id}</p>
        <p>{todo}</p> 
        <button onClick={()=>{deleteTodo(id)}}>Delete</button>       
      </li>
    </>
  );
}

export default TodoComponent;
