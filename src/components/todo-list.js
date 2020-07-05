import React from "react";

import TodoListItem from "./todo-list-item";

const TodoList = ()=>{
    return (
        <ul>
            <li><TodoListItem
                label="Do"
                important={true}/></li>
            <li><TodoListItem label="Do some"/></li>
        </ul>
    )
}

export default TodoList;