import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddTodo extends Component {
    state = {
        title: ''
    }

    onSubmit = (e) =>{
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ""});
    }

    onChange = (e) => {
        this.setState({title: e.target.value})
        //this.setState({e.target.name : e.target.value}) -> when you have multiple inputs (name, email etc.)
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text" name="title" placeholder="Add todo.." value={this.state.title} onChange={this.onChange}/>
            <input type="submit" value="+" className="btnAdd"/>
            </form>
        )
    }
}

AddTodo.propTypes = {
   addTodo: PropTypes.func.isRequired
}
export default AddTodo;