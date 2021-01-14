import React from 'react';

const Counter = (props) => {
    return (
        <p>You have <span>{props.todos.filter(todo => !todo.completed).length}</span> todos</p>
    )
}

export default Counter;