import React, {Component} from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component{

    state = {
        label: 'Default work'
    }

    onLabelChange = (e)=>{
        this.setState({
            label: e.target.value
        })
    }
    onSubmit = (e)=> {
        e.preventDefault();
        this.props.onItemAdded(this.state.label)
    }

    render() {
        return (
            <form className='item-add-form d-flex'
                onSubmit={this.onSubmit}
            >
                <input
                    placeholder="type"
                    onChange={this.onLabelChange}
                    className="form-control mr-2"
                    type="text"/>
                <button
                    className='btn btn-outline-secondary'
                >AddItem</button>
            </form>
        )
    }
}

