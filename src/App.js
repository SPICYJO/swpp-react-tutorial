import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './containers/TodoList/TodoList';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import NewTodo from './containers/NewTodo/NewTodo';

function App() {
  return (
    <BrowserRouter>
		<div className='App'>
			<Switch>
				<Route path='/todos' exact render={() => <TodoList title="My TODOs!" />} />
<<<<<<< HEAD
				<Route path='/todos/:id' exact component={TodoDetail}/> 
				<Route path='/new-todo' exact component={NewTodo} />
				<Redirect exact from='/' to='/todos' />
				<Route render={() => <h1>Not Found</h1>} />
=======
				<Route path='/new-todo' exact component={NewTodo} />
				<Redirect exact from='/' to='/todos' />
>>>>>>> 1deb1a11c8439a19b74f1aede30bbc917ffd583c
			</Switch>
		</div>
	</BrowserRouter>
  );
}

export default App;
