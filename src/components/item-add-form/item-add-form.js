import React, {Component} from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component{

    state = {
        text: 'new work'
    }

    render() {
        const {onItemAdded} = this.props
        return (
            <div className='item-add-form'>
                <hr/>
                <button
                    className='btn btn-outline-secondary'
                    onClick={()=>onItemAdded(this.state.text)}
                >Add</button>
            </div>
        )
    }
}