import React from 'react';

class Ingredients extends React.Component {
  state = {
    ingredients: [
      { measurement: '10',
        units: 'kg',
        ingredient_name: 'potatos'},
      { measurement: '200',
        units: 'gr',
        ingredient_name: 'flower'},
      { measurement: '2',
        units: 'cups',
        ingredient_name: 'water'},
      ],
    measurement: '',
    units: 'kg',
    ingredient_name: ''
  }

  ingredientsList = this.state.ingredients[0] && this.state.ingredients.map((ingredient,index) => {
      return <li key={index} className="ingredientsList">
        {ingredient.measurement} {ingredient.units} {ingredient.ingredient_name}
      </li>
  })

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
    this.state.ingredients.push(fullIngredientInfo)
    
    this.setState({
      measurement:'',
      units:'kg',
      ingredient_name:'',
    })
    console.log('state:', this.state)
  }
  
  render() {
    return(
      <div>
        <ul>
          {this.ingredientsList}
        </ul>
        <form className="addIngredient" onSubmit={this.onSubmit}>
          <input type='number' name='measurement' value={this.state.measurement} onChange={this.onChange} required/>
          <select name='units' onChange={this.onChange}>
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
          <input type="text" name='ingredient_name' placeholder="peanuts" value={this.state.ingredient_name} onChange={this.onChange} required/>
          <input type="submit" value="+"/>
        </form>
      </div>
    ) 
  }
}  

export default Ingredients
