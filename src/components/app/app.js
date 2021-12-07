import React, { Component } from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";
import ItemAddForm from "../item-add-form";

import "./app.css";

export default class App extends Component {

    maxId = 1;

    state = {
        todoData: [
            this.createTodoItem('Learn react'),
            this.createTodoItem('Read Book'),
            this.createTodoItem('Go to the GYM')
        ]
    };

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        };
    };

    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex((el) => el.id === id);
        const oldItem = arr[idx];
        const newItem = {...oldItem, [propName]: !oldItem[propName]};

        return [
            ...arr.slice(0,idx),
            newItem,
            ...arr.slice(idx + 1)
        ];
    };

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);

            const newTodoData = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ];

            return {
                todoData: newTodoData
            };
        });
    };

    addItem = (text) => {
         
        const newItem = this.createTodoItem(text);

        this.setState(({todoData}) => {
            const newArr = [
                ...todoData,
                newItem
            ];

            return {
                todoData: newArr
            };
        });
    };

    onToggleImportant = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            }
        });
    }

    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            }
        });
    }

    onActiveStatusFilter = () => {
        this.setState(({todoData}) => {
            return {
                todoData: todoData.slice().filter((el) => !el.done)
            };
        });
    };

    onDoneStatusFilter = () => {
        this.setState(({todoData}) => {
            return {
                todoData: todoData.slice().filter((el) => el.done)
            };
        });
    };



    render () {

        const {todoData} = this.state;
        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;

        return (
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount}/>
                <div className="top-panel d-flex">
                    <SearchPanel/>
                    <ItemStatusFilter
                        onActiveStatusFilter={this.onActiveStatusFilter}
                        onDoneStatusFilter={this.onDoneStatusFilter}
                    />
                </div>
    
                <TodoList 
                    todos={todoData}
                    onDeleted={this.deleteItem} 
                    onDoggleImportant={this.onToggleImportant}
                    onDoggleDone={this.onToggleDone}
                />
                <ItemAddForm
                    onAdded={this.addItem}
                />
            </div>
        );
    };
};

