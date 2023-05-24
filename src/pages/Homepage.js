import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import "../styles/styles.css";
import nutrition from "../assets/nutrition.json"

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
  var value = nutrition.find(nutrition => nutrition.name === e);
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


    return(
      <div>
        <h1>Cava Calculator</h1>
        <button onClick={() => changeHandler("Garlic Dressing")}>button</button>
        <h1>{allValues.calories}</h1>
        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic">Greens & Grains</Dropdown.Toggle>
            <Dropdown.Menu>
            {greens.map((item, index)=>{
                              return <Dropdown.Item><button onClick={() => changeHandler(greens[index].name)}>{greens[index].name}</button></Dropdown.Item>})}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">Mains</Dropdown.Toggle>
              <Dropdown.Menu>
              {mains.map((item, index)=>{
                                return <Dropdown.Item><button onClick={() => changeHandler(mains[index].name)}>{mains[index].name}</button></Dropdown.Item>})}
              </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">Toppings</Dropdown.Toggle>
              <Dropdown.Menu>
              {toppings.map((item, index)=>{
                                return <Dropdown.Item><button onClick={() => changeHandler(toppings[index].name)}>{toppings[index].name}</button></Dropdown.Item>})}
              </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">Dips + Sauces</Dropdown.Toggle>
              <Dropdown.Menu>
              {dips.map((item, index)=>{
                                return <Dropdown.Item><button onClick={() => changeHandler(dips[index].name)}>{dips[index].name}</button></Dropdown.Item>})}
              </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">Dressings</Dropdown.Toggle>
              <Dropdown.Menu>
              {dressings.map((item, index)=>{
                                return  <Dropdown.Item><button onClick={() => changeHandler(dressings[index].name)}>{dressings[index].name}</button></Dropdown.Item>})}
              </Dropdown.Menu>
          </Dropdown>
        </div>
    )
}
