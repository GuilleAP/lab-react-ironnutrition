import './App.css';
import foods from './foods.json';

import { useState } from "react";

import FoodBox from './components/FoodBox'
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

import { Row, Divider, Button } from 'antd';


function App() {

  const [foodList, setFoods] = useState(foods)
  const [form, setForm] = useState(true)

  const addNewFood = (newFood) => {
    const foodsCopy = [...foods, newFood]
    setFoods(foodsCopy)
  }

  const searchFood = (foodName) => {
    let foodsCopy = [...foods]
    foodsCopy = foodsCopy.filter(a => a.name.toLowerCase().includes(foodName))
    setFoods(foodsCopy)
  }

  const deleteFood = (name) => {
    const arrayCopy = [...foodList]

    for(let i = 0; i < arrayCopy.length; i++) {
      if(arrayCopy[i].name === name) {
        arrayCopy.splice(i, 1)
      }
    }

    setFoods(arrayCopy)
  }

  const hideForms = () => {
    if(form) setForm(false) 
    else if(!form) setForm(true)
  }

  return (
    <div className="App">
    {
      form ? (
        <>
        <AddFoodForm addFood={addNewFood}/>
        <Button onClick={() => hideForms()}> Hide Form </Button>
        </>
      ) : (
        <Button onClick={() => hideForms()}> Add New Form </Button>
      )
    }
    


    <Search searchFood={searchFood}/>

    <Divider>Food List</Divider>

    <Row style={{ width: '100%', justifyContent: 'center' }}>
      {
        foodList.length ? (
          foodList.map((food) => {
            return(
              <FoodBox food={ {
                name: food.name,
                calories: food.calories,
                image: food.image,
                servings: food.servings
              }}
              deleteFood={deleteFood}
              />
            )
          })
        ) : (
          <h2>uuups! There is no more content to show</h2>
        )
      }
      </Row>
    </div>
  );
}

export default App;
