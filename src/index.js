import React from "react";
import ReactDOM from 'react-dom'

const TodoList = ()=>{
    const items = ['Do something', 'Drink tea']
    return (
        <ul>
            <li>{items[0]}</li>
            <li>{items[1]}</li>
        </ul>
    )
}
const AppHeader = ()=>{
    return (
        <h1>To do List</h1>
    )
}
const SearchPanel = ()=>{
    const searchText = 'search'
    const searchStyle = {
        fontSize: '20px'
    }
    return (
        <input
            type="text"
            placeholder={searchText}
            style={searchStyle}
        />
    )
}
const App = ()=>{
    const isLoggedIn = false
    const loginBox = <span>Log in please</span>
    return (
        <div>
            {isLoggedIn ? null : loginBox}
            <AppHeader />
            <SearchPanel />
            <TodoList />
        </div>
    )
}

const el = <App/>;

ReactDOM.render(el, document.getElementById('root'))
