import React, { useEffect, useState } from 'react'
import { List } from 'semantic-ui-react'
import { RecipeForm } from './RecipeForm'

function AddRecipe () {
  //inside the useState the initial state is an empty array
  //useState returns an array: the first element is a state value and the second is a function to update the state
  //deconstructing from useState the value of the state and the update function:
  const [todos, setTodos] = useState([])

  //get the todos from the db when the component mounts
  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
  //setTodos puts the array of todos from the db on the 'todos' of the state
    .then(json => setTodos(json))
  },[])

  return (
    <div>
      <RecipeForm/>
      {/* list is from semantic-ui */}
        <List>
        { todos[0] && todos.map(todo => 
          <List.Item key={todo.id}>{todo.title}</List.Item>
          )
        }
      </List>
    </div>
  )
}

export default AddRecipe;