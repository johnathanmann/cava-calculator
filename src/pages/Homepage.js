import { useState } from "react";
import "../styles/styles.css";
import nutrition from "../assets/nutrition.json";

let greens = nutrition.filter(x => x.type === "greens & grains");
let mains = nutrition.filter(x => x.type === "mains");
let toppings = nutrition.filter(x => x.type === "toppings");
let dips = nutrition.filter(x => x.type === "dips + spreads");
let dressings = nutrition.filter(x => x.type === "dressings");

export default function Homepage(){
  const [allValues, setAllValues] = useState({
    calories: 0,
    fat: 0,
    satFat: 0,
    cholesterol: 0,
    sodium: 0,
    carbs: 0,
    fiber: 0,
    sugar: 0,
    protein: 0
 });

 const changeHandler = (e) => {
  let value = nutrition.find(nutrition => nutrition.name === e);
  setAllValues((allValues) => ({
    ...allValues,
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
console.log(allValues)
}


    return(
      <div>
        <header>
            <h1>CAVA Calculator</h1>
        </header>
        <main>
          <article id="ingredient-article">
            <section>
              <h2 className="section-header">GREENS & GRAINS</h2>
              {greens.map((item, index)=>{
                return <button className="ingredient" onClick={() => changeHandler(greens[index].name)}><img src={greens[index].img}/>{greens[index].name}</button>})} 
            </section>
          </article>
          <article id="nutrition-article">
            <p>Calories :{allValues.calories}</p>
            <p>Fat: {allValues.fat}</p>
            <p>SatFat: {allValues.satFat}</p>
            <p>transFat: {allValues.transFat}</p>
            <p>Cholestreol: {allValues.cholesterol}</p>
            <p>sodium: {allValues.sodium}</p>
            <p>carbs: {allValues.carbs}</p>
            <p>fiber: {allValues.fiber}</p>
            <p>sugar: {allValues.sugar}</p>
            <p>Protein: {allValues.protein}</p>
          </article>
        </main>          
        </div>
    )
}
