import { useState } from "react";

import { Divider, Input } from 'antd';


function AddFoodForm(props) {

    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [calories, setCalories] = useState(0)
    const [serving, setServing] = useState(0)

    const handlerNameInput = (e) => {
        setName(e.target.value)
    }

    const handlerImageInput = (e) => {
        setImage(e.target.value)
    }

    const handlerCaloriesInput = (e) => {
        setCalories(e.target.value)
    }

    const handlerServingInput = (e) => {
        setServing(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newFood = {
          name: name,
          image: image,
          calories: calories,
          serving: serving
        };
    
        props.addFood(newFood); 
        
        setName('')
        setImage('')
        setCalories(0)
        setServing(0)
    };

    return (
        <form onSubmit={handleSubmit}>
        <Divider>Add Food Entry</Divider>

        <label>Name</label>
        <Input value={name} type="text" onChange={handlerNameInput}/>

        <label>Image</label>
        <Input value={image} type="text" onChange={handlerImageInput} />

        <label>Calories</label>
        <Input value={calories} type="number" onChange={handlerCaloriesInput} />

        <label>Servings</label>
        <Input value={serving} type="number" onChange={handlerServingInput} />

        <button type="submit">Create</button>
        </form>
    );
}

export default AddFoodForm;