import React, { useState } from 'react'
import { Form, Input, Container, Header, Button, List } from 'semantic-ui-react'

export const RecipeForm = () => {
  const [title, setTitle] = useState('')
  const [servingSize, setServingSize] = useState(1)
  const [type, setType] = useState('')
  const [picture, setPicture] = useState('')
  const [instructions, setInstructions] = useState('')
  const [isPrivate, setPrivate] = useState(false)
  const [ingredientName, setIngredientName] = useState('')
  const [ingredientUnit, setIngredientUnit] = useState('kg')
  const [ingredientAmount, setIngredientAmount] = useState(0)
  const [ingredients, setIngredients] = useState([])


  return (
    <Container style={{marginTop: 40}}>
      <Header>Add a recipe</Header>
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
        
        <List>
          { ingredients[0] && ingredients.map(ingredient => 
            <List.Item key={ingredient.ingredientName}> 
              {ingredient.ingredientAmount} {ingredient.ingredientUnit} {ingredient.ingredientName}
            </List.Item>
          )}
        </List>
        
        <Form.Group>
          <Form.Field 
            label='Amount' 
            control='input' 
            type='number' 
            value={ingredientAmount} 
            onChange={e => setIngredientAmount(e.target.value)}
            />
          <Form.Field 
            label='Units'  
            control='select' 
            onChange={e => setIngredientUnit(e.target.value)}>
            <option value="kg">kilogram (kg)</option>
            <option value="g">gram (g)</option>
            <option value="L">liter (l)</option>
            <option value="ml">milliliter (ml)</option>
            <option value="lb">pound (lb)</option>
            <option value="oz">ounce (oz)</option>
            <option value="us_cups">us cups</option>
            <option value="us_tablespoon">us tablespoon</option>
            <option value="us_dessert_spoon">us dessert spoon</option>
            <option value="us_teaspoon">us teaspoon</option>
            <option value="Australian_cups">Australian cups</option>
            <option value="Australian_tablespoon">Australian tablespoon</option>
            <option value="small"> Small </option>
            <option value="medium"> Medium </option>
            <option value="large"> Large </option>
          </Form.Field>
          <Form.Field 
            label='Ingredient' 
            control='input' 
            type='text' 
            placeholder='e.g Wheat flour'
            value={ingredientName} 
            onChange={e => setIngredientName(e.target.value)} 
            />
          <button onClick={() => {
            const fullIngredientInfo = { ingredientAmount, ingredientUnit, ingredientName}
            console.log(fullIngredientInfo)
            setIngredients([...ingredients, fullIngredientInfo])
            //clear the state
            setIngredientName('')
            setIngredientAmount(0)
            
          }}> + </button>

        </Form.Group>

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

        <Form.Field>
          <Button onClick={ () => {
            const recipe ={ title, servingSize, type, picture, ingredients,  instructions, isPrivate}
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

          //clear the form
          setTitle('')
          setServingSize(1)
          setType('')
          setPicture('')
          setInstructions('')
          setPrivate(false)
          setIngredients([])

          }}> Save Recipe</Button>
        </Form.Field>
      </Form>
    </Container>
  )
}