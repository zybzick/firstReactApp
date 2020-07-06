import React, {Component} from 'react';

import './add-item.css';

export default class AddItem extends Component{

    state = {
        text: 'new work'
    }


    render() {
        const {onAddItem} = this.props
        return (
            <div>
                <hr/>
                <button
                    className='btn'
                    onClick={()=>onAddItem(this.state.text)}
                >Add</button>
            </div>
        )
    }
}