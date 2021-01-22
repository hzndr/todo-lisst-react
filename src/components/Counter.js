import React from 'react';

const Counter = (props) => {
    const length = props.todos.filter(todo => !todo.completed).length;

    return (
    <p className="counter">You have <span>{length}</span> {length === 1 ? 'todo' : 'todos'}</p>
    )
}
    
export default Counter;