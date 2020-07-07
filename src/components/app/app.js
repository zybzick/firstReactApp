import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import TodoList from "../todo-list";
import ItemAddForm from "../item-add-form";
import React, {Component} from "react";

import './app.css'

export default class App extends Component {
    maxId = 100

    state = {
        todoData: [
            this.createTodoItem('do something'),
            this.createTodoItem('drink tea'),
            this.createTodoItem('watch film'),
        ]
    }

    createTodoItem(label){
        return {
            label: label,
            important: false,
            done: false,
            id: this.maxId++
        }
    }

    deleteItem = (id)=>{
        this.setState(({todoData})=>{
            return {
                todoData: todoData.filter((el) => el.id !== id)
            }
        })
    }
    addItem = (text)=>{
        this.setState(({todoData})=>{
            const newItem = this.createTodoItem(text)
            return {
                todoData: [...todoData, newItem]
            }
        })
    }
    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: todoData
                    .map((el) => el.id === id ? {...el, done: !el.done} : {...el})
            }
        })
    }
    onToggleImportant = (id)=> {
        this.setState(({todoData}) => {
            return {
                todoData: todoData
                    .map((el) => el.id === id ? {...el, important: !el.important} : {...el})
            }
        })
    }

    render() {
        const {todoData} = this.state
        const doneCount = todoData
            .filter((el)=>el.done===true).length
        const todoCount =  todoData.length - doneCount

        return (
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount} />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>

                <TodoList
                    onDeleted={ this.deleteItem }
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                    todos={ todoData } />
                <ItemAddForm
                    onItemAdded={this.addItem}
                />
            </div>
        );
    }
}


