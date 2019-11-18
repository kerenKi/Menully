import React from 'react';
import Ingredients from './IngredientsList'

class AddRecipe extends React.Component {
  state = {
    linkRecipe: '',
    typedRecipe: {
      title: '',
      servingSize: 0,
      type: '',
      picture: '',
      ingredients: [],
      instructions: '',
      private: false, 
    }
  }

  onChangeLink = (event) => {
    this.setState({
      linkRecipe: event.target.value
    })
  }

  onSendLink = (event) => {
    event.preventDefault()
    console.log(this.state.linkRecipe)
  }
  
  render() {
    return(
      <div>
        <h1>Add your recipe:</h1>

        <h3>From a link</h3>
        <form className="recipeFromURL" onSubmit={this.onSendLink}>
          <label> Paste the url here:</label>
          <input type="text" name="url" onChange={this.onChangeLink}></input>
          
          <input type="submit" value="Add Recipe from URL"/>    
        </form>
        <h2>Or</h2>
        <Ingredients></Ingredients>
        <h3>Type it in </h3>
        <form className="typedRecipe">
          <ul>
          <li>
              <label>Title</label>
              <input type="text" name="title" placeholder="e.g Mom's chicken parmesan" required/>
            </li>
            <li>
              <label>Serving size</label>
              <input type="number" name="servingSize" required/>
            </li>
            <li>
              <label>Type</label>
              <input type="text" name="type" placeholder="e.g Breakfast / Lunch / Snack"/>
            </li>
            <li>
              <label>Picture</label>
              <input type="text" name="picture" placeholder="paste image address here"/>
            </li>
            <li id="ingredients">
              <label>Ingredients</label>
              <form className="addIngredient">
                <input type='number'/>
                <select>
                  <option value="kg">kilogram (kg)</option>
                  <option value="g">gram (g)</option>
                  <option value="l">liter (l)</option>
                  <option value="ml">milliliter (ml)</option>
                  <option value="lb">pound (lb)</option>
                  <option value="oz">ounce (oz)</option>
                  <option value="us_cups">us cups</option>
                  <option value="us_tablespoon">us tablespoon</option>
                  <option value="us_dessert_spoon">us dessert spoon</option>
                  <option value="us_teaspoon">us teaspoon</option>
                  <option value="Australian_cups">Australian cups</option>
                  <option value="Australian_tablespoon">Australian tablespoon</option>
                  <option value="non"> --- </option>
                </select>
                <input type="text" placeholder="peanuts"/>
                <input type="submit" value="+"/>
              </form>
            </li>
            <li>
              <label>Instructions</label>
              <textarea type="text" name="instructions" required/>
            </li>
            <li id="private">
              <input type="checkbox" name="servingSize"/>
              <label>Make it private (only available to me)</label>
            </li>
            <li>
            <input type="submit" value="Save your recipe" />
          </li>
          </ul>
        </form>
      </div>
    ) 
  }
}  

export default AddRecipe