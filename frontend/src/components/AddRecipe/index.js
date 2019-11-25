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
  
  onTypeChange = (event) => {
    this.setState({
      typedRecipe:{
        [event.target.name]: event.target.value
      }
    })
  }

  onTypeSubmit = (event) => {
    event.preventDefault()
    console.log(this.state.typedRecipe)
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
        <h3>Type it in </h3>
        <form className="typedRecipe" onSubmit={this.onTypeSubmit}>
          <ul>
          <li>
              <label>Title</label>
              <input type="text" name="title" placeholder="e.g Mom's chicken parmesan" required onChange={this.onTypeChange}/>
            </li>
            <li>
              <label>Serving size</label>
              <input type="number" name="servingSize" required onChange={this.onTypeChange}/>
            </li>
            <li>
              <label>Type</label>
              <input type="text" name="type" placeholder="e.g Breakfast / Lunch / Snack" onChange={this.onTypeChange}/>
            </li>
            <li>
              <label>Picture</label>
              <input type="text" name="picture" placeholder="paste image address here" onChange={this.onTypeChange}/>
            </li>
            <li id="ingredients">
              <label>Ingredients</label>
              <Ingredients/>
            </li>
            <li>
              <label>Instructions</label>
              <textarea type="text" name="instructions" required onChange={this.onTypeChange}/>
            </li>
            <li id="private">
              <input type="checkbox" name="private" onChange={this.onTypeChange}/>
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