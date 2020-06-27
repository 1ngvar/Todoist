import React, { useState } from 'react';
import TodoList from './Todoist'
import './App.css';


function App() {
    // Setting a default state for our Todos. A default state is an empty array because we start with no Todos
    // useState() returns an array, so we can destructure it (ES 6 feature) and set it equal to an array constant with 2 parameters: our array of Todos and a function, that allows us to update it
    const [todos, setTodos] = useState([]);


  return (
      <div>
          <TodoList/>
          <input type="text" name="" id=""/>
          <button>Add Todo</button>
          <button>Clear Completed Todos</button>
          <div>0 left to do</div>

      </div>

  );
}

export default App;
