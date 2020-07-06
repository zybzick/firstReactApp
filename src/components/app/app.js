import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import TodoList from "../todo-list";
import AddItem from "../add-item";
import React, {Component} from "react";

import './app.css'

export default class App extends Component {

    state = {
        todoData: [
            { label: 'Drink Coffee', important: false, id: 1 },
            { label: 'Make Awesome App', important: true, id: 2 },
            { label: 'Have a lunch', important: false, id: 3 }
        ]
    }

    deleteItem = (id)=>{
        this.setState(({todoData})=>{
            const res = todoData.filter((el) => el.id !== id)
            return {
                todoData: res
            }
        })
    }
    addItem = (text)=>{
        this.setState(({todoData})=>{
            const maxId = todoData.length + 1
            const res = [...todoData, {label: text, important: false, id: maxId}]
            return {
                todoData: res
            }
        })
    }

    render() {
        return (
            <div className="todo-app">
                <AppHeader toDo={1} done={3} />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>

                <TodoList
                    onDeleted={ this.deleteItem }
                    todos={ this.state.todoData } />
                <AddItem
                    onAddItem={this.addItem}
                />
            </div>
        );
    }

}


