import React from "react";

import "./todo-list-item.css";


const TodoListItem = ({
  label,
  onDeleted,
  onDoggleImportant,
  onDoggleDone,
  important,
  done,
}) => {
  const style = {
    color: important ? "steelblue" : "black",
    fontWeight: important ? "bold" : "normal",
  };

  let classNames = "todo-list-item";
  if (done) {
    classNames += " done";
  }
  if (important) {
    classNames += " important";
  }

  return (
    <span className={classNames}>
      <span className="todo-list-item-label" 
        style={style} 
        onClick={onDoggleDone}
        
      >
        {label}
      </span>

      <button
        type="button"
        className="btn btn-outline-success btn-sm float-right"
        onClick={onDoggleImportant}
      >
        <i className="fa fa-exclamation" />
      </button>

      <button
        type="button"
        className="btn btn-outline-danger btn-sm float-right"
        onClick={onDeleted}
        
      >
        <i className="fa fa-trash-o" />
      </button>
    </span>
  );
};

export default TodoListItem;