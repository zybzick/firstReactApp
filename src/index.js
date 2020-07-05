import React from "react";
import ReactDOM from 'react-dom'

import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import TodoList from "./components/todo-list";


const App = ()=>{

    const totoData = [
        {label: 'Do something', important: false, id:1},
        {label: 'Make case', important: false, id:2},
        {label: 'Drink tea', important: true, id:3},
    ]

    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList todos={totoData}/>
        </div>
    )
}


ReactDOM.render(<App/>, document.getElementById('root'))
