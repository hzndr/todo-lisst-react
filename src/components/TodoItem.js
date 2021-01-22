import React, {Component} from 'react';
import PropTypes from 'prop-types';


class TodoItem extends Component{

    getStyle = () => {
        return {
            textDecoration: this.props.todo.completed ? 'line-through' : "none"
        }
    }



    render(){
        const {id, title, completed} = this.props.todo;
        return(
            <div >
<li> <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} checked={completed}/>

<span style={this.getStyle()}>{title}</span><button onClick={this.props.deleteItem.bind(this, id)}>x</button></li>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired
}



export default TodoItem;