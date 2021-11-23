import React from "react";

import TodoListItem from "../todo-list-item/todo-list-item";

const TodoList = (props) => {

    return (
        <ul>
            <li><TodoListItem /></li>
            <li><TodoListItem /></li>
        </ul>
    );
};

export default TodoList;