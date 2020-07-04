import React from "react";
import ReactDOM from 'react-dom'

const TodoList = ()=>{
    return (
        <ul>
            <li>Do something</li>
            <li>Repit</li>
        </ul>
    )
}
const AppHeader = ()=>{
    return (
        <h1>To do List</h1>
    )
}
const SearchPanel = ()=>{
    return (
        <input type="text" placeholder="search"/>
    )
}
const App = ()=>{
    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList />
        </div>
    )
}

const el = <App/>;

ReactDOM.render(el, document.getElementById('root'))
