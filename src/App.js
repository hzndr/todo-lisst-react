import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
import About from './components/pages/About';
import Counter from './components/Counter';
import axios from 'axios';
import './App.css';
import { v4 as uuidv4} from 'uuid';

class App extends Component {
state = {
todos: []

}

//Axios
componentDidMount() {
  axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5")
  .then(res => this.setState({todos: res.data}))
}


//Toggle Completed
markComplete = (id) => {
  let checked = this.state.todos.map(todo => {
    if(todo.id === id){
      todo.completed = !todo.completed;
    }
    return todo;
  })
   this.setState({
     todos: checked
   })
}


// Delete Item
deleteItem = (id) => {
  axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
  .then(res => this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]}));
}

// Add Item
addTodo = (title) => {
  axios.post('https://jsonplaceholder.typicode.com/todos', 
  {title,
  completed: false})
  .then(res => {
    res.data.id = uuidv4();
    this.setState({todos: [...this.state.todos, res.data]})});
  
}

  render(){
  return (
    <BrowserRouter>
    <div className="wrapper">
      <Header />
      <Route exact path="/" render={props => (<React.Fragment> 
      <Counter todos={this.state.todos} />
      <AddTodo addTodo={this.addTodo}/>
      <Todos todos={this.state.todos} markComplete={this.markComplete} deleteItem={this.deleteItem}/>
      </React.Fragment>)}/>
      <Route path="/about" component={About}/>
    </div>
    </BrowserRouter>
  );
}
}

export default App;
