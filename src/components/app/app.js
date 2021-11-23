import React from "react";
import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import TodoList from "../todo-list/todo-list.js";

const App = () => {

    const todoData = [
        {label: 'Learn react', important: true},
        {label: 'Read Book', important: false},
        {label: 'Go to the GYM', important: true}
    ];

    return (
        <div>
            <AppHeader/>
            <SearchPanel/>
            <TodoList todos={todoData} />
        </div>
    );
};

export default App;