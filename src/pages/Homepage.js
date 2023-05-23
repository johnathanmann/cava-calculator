import { useState, useEffect } from "react";
import "../styles/styles.css";
import nutrition from "../assets/nutrition.json"

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
  console.log(value)
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
}

console.log(allValues)
    return(
      <div>
        <h1>Cava Calculator</h1>
        <button onClick={() => changeHandler("salad")}>button</button>
        </div>
    )
}
