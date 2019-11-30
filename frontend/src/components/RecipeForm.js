import React, { useState } from 'react'
import { Form, Input, Container, Header, Button, TextArea, Checkbox } from 'semantic-ui-react'

export const RecipeForm = () => {
  const [title, setTitle] = useState('')
  const [servingSize, setServingSize] = useState(1)
  const [type, setType] = useState('')
  const [picture, setPicture] = useState('')
  const [instructions, setInstructions] = useState('')
  const [isPrivate, setPrivate] = useState(false)
  const [ingredients, setIngredients] = useState([])


  return (
    <Container style={{marginTop: 40}}>
      {isPrivate && <Header>private</Header>}
      <Form>
        <Form.Field>
          <Input 
            label="Title"
            placeholder="e.g Mom's chicken parmesan" 
            value={title} 
            onChange={e => setTitle(e.target.value)}
          />
        </Form.Field>

        <Form.Field>
          <Input 
            label="Serving Size"
            type="number"
            value={servingSize} 
            onChange={e => setServingSize(e.target.value)}
          />
        </Form.Field>

        <Form.Field>
          <Input 
            label="Type"
            placeholder="e.g Breakfast / Lunch / Snack" 
            value={type} 
            onChange={e => setType(e.target.value)}
          />
        </Form.Field>

        <Form.Field>
          <Input 
            label="Picture"
            placeholder="paste image address here" 
            value={picture} 
            onChange={e => setPicture(e.target.value)}
          />
        </Form.Field>

        <Form.TextArea
            label='Instructions' 
            value={instructions} 
            onChange={e => setInstructions(e.target.value)}
          />
        
        <Form.Field 
        label='Make it private (only available to me)'
        control='input' 
        type='checkbox'
        value={isPrivate} 
        onChange={() => setPrivate(!isPrivate)}
        />
        {/* <Form.Field>
          control={Checkbox}
          label='Make it private (only available to me)' value={isPrivate} onClick={setPrivate(true)}
        </Form.Field> */}
        {/* /////////////
        <li id="ingredients">
              <label>Ingredients</label>
              <Ingredients/>
            </li>
            <li id="isPrivate">
              <input type="checkbox" name="isPrivate" onChange={this.onTypeChange}/>
              <label>Make it isPrivate (only available to me)</label>
            </li>
            <li>
            //////////////////////////// */}

        <Form.Field>
          <Button onClick={ () => {
            const recipe ={ title, servingSize, type, picture, instructions, isPrivate}
            console.log(recipe)
            //later send a post request to /recipe
            fetch('https://jsonplaceholder.typicode.com/posts', {
              method: 'POST',
              body: JSON.stringify({
              title: 'foo',
              body: 'bar',
              userId: 1
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          })
          .then(response => response.json())
          .then(json => console.log(json))
          }}> Save Recipe</Button>
        </Form.Field>
      </Form>
    </Container>
  )
}