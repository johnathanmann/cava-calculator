import { useState, createElement } from "react";
import $ from 'jquery';
import "../styles/styles.css";
import nutrition from "../assets/nutrition.json";

let greens = nutrition.filter(x => x.type === "greens & grains");
let mains = nutrition.filter(x => x.type === "mains");
let toppings = nutrition.filter(x => x.type === "toppings");
let dips = nutrition.filter(x => x.type === "dips + spreads");
let dressings = nutrition.filter(x => x.type === "dressings");

let ingredients = []

export default function Homepage(){
  const [allValues, setAllValues] = useState({
    calories: 0,
    fat: 0,
    satFat: 0,
    transFat: 0,
    cholesterol: 0,
    sodium: 0,
    carbs: 0,
    fiber: 0,
    sugar: 0,
    protein: 0
 });

 const addIngredient = (e) => {
  let value = nutrition.find(nutrition => nutrition.name === e);
  ingredients.push(value.name)
  console.log(ingredients)
  setAllValues(() => ({
    calories: allValues.calories + value.calories,
    fat: allValues.fat + value.fat,
    satFat: allValues.satFat + value.satFat,
    transFat: allValues.transFat + value.transFat,
    cholesterol: allValues.cholesterol + value.cholesterol,
    sodium: allValues.sodium + value.sodium,
    carbs: allValues.carbs + value.carbs,
    fiber: allValues.fiber + value.fiber,
    sugar: allValues.sugar + value.sugar,
    protein: allValues.protein + value.protein
}));
}

const deleteIngredient = (name) => {
  let value = nutrition.find(nutrition => nutrition.name === name);
  console.log(ingredients)
  setAllValues(() => ({
    calories: allValues.calories - value.calories,
    fat: allValues.fat - value.fat,
    satFat: allValues.satFat - value.satFat,
    transFat: allValues.transFat - value.transFat,
    cholesterol: allValues.cholesterol - value.cholesterol,
    sodium: allValues.sodium - value.sodium,
    carbs: allValues.carbs - value.carbs,
    fiber: allValues.fiber - value.fiber,
    sugar: allValues.sugar - value.sugar,
    protein: allValues.protein - value.protein
}));
}

$(document).one('click', '.remove_field', function () {
  $(this).closest('li').remove();
});
    return(
      <div>
        <header id="header">
            <h1>CAVA Calculator</h1>
        </header>
        <main>
          <article id="ingredient-article">
            <section>
              <h2 className="section-header">GREENS & GRAINS</h2>
              {greens.map((item, index)=>{
                return <button className="ingredient" onClick={() => addIngredient(greens[index].name)}><img src={greens[index].img}/>{greens[index].name}</button>})} 
            </section>
          </article>
          <article id="nutrition-article">
            <div id="nutrition">
              <header>
                <h1>Nutritional Information</h1>
                <p>1 servings per container</p>
                <p className="inline">Serving sizes <span>1 bowl</span></p>
              </header>
              <p id="top-border">Amount per serving</p>
              <p className="inline" id="calories">Calories <span>{allValues.calories}</span></p>
              <p className="nutrition-item">Total Fat <span>{allValues.fat}</span></p>
              <p className="nutrition-item-indent">Saturated Fat <span>{allValues.satFat}g</span></p>
              <p className="nutrition-item-indent">Trans Fat <span>{allValues.transFat}g</span></p>
              <p className="nutrition-item">Cholesterol <span>{allValues.cholesterol}mg</span></p>
              <p className="nutrition-item">Sodium <span>{allValues.sodium}mg</span></p>
              <p className="nutrition-item">Total Carbohydrate <span>{allValues.carbs}g</span></p>
              <p className="nutrition-item-indent">Dietary Fiber <span>{allValues.fiber}g</span></p>
              <p className="nutrition-item-indent">Total Sugars <span>{allValues.sugar}g</span></p>
              <p className="nutrition-item" id="protein">Protien <span>{allValues.protein}g</span></p>
            </div>
            <ul id="ingredient-list">
            {ingredients.map((item, index)=>{
              console.log(item)
              let value = nutrition.find(nutrition => nutrition.name === item)
              console.log(value)
                return <li className="remove_field" onClick={() => deleteIngredient(value.name)}>{value.name}</li>})}
            </ul>
          </article>
        </main>          
        </div>
    )
}
