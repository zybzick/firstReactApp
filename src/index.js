import React from "react";
import ReactDOM from 'react-dom'

const el = (
    <div>
        <h1>To do List</h1>
        <input type="text" placeholder="search"/>
        <ul>
            <li>Do something</li>
            <li>Repit</li>
        </ul>
    </div>
);

ReactDOM.render(el, document.getElementById('root'))
