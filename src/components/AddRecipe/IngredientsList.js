import React from 'react';

class Ingredients extends React.Component {
  state = {
    ingredients: [],
    measurement: '',
    units: 'kg',
    ingredient_name: '',
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    const fullIngredientInfo = {
      measurement: this.state.measurement,
      units: this.state.units,
      ingredient_name: this.state.ingredient_name
    }
    
    this.setState({
      ingredients: [...this.state.ingredients, fullIngredientInfo],
      measurement: '',
      units: 'kg',
      ingredient_name:'',
    })
  }
  
  render() {
    return(
      <div>
        <ul>
          {this.state.ingredients[0] && this.state.ingredients.map((ingredient,index) => {
            return <li key={index} className="ingredientsList">
              {ingredient.measurement} {ingredient.units} {ingredient.ingredient_name}
            </li>
          })}
        </ul>

        <form className="addIngredient" onSubmit={this.onSubmit}>
          <input type='number' name='measurement' value={this.state.measurement} onChange={this.onChange} required/>
          <select name='units' onChange={this.onChange}>
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
          </select>
          <input type="text" name='ingredient_name' placeholder="peanuts" value={this.state.ingredient_name} onChange={this.onChange} required/>
          <input type="submit" value="+"/>
        </form>
      </div>
    ) 
  }
}  

export default Ingredients
