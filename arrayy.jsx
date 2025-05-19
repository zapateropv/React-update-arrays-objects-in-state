import { useState } from "react"


export default function Arrayy (){

    const [foods, setFoods] = useState(['Apple','Orange','Banana'])

    const setAddFoods = () => {
        let value = document.getElementById('foodInput').value
       
        if(value !== ""){
             setFoods(f => [...f, value])
             document.getElementById('foodInput').value = ""
        }else{
            alert("Enter some foods")
        }
        console.log(value)
    }


    const removeFoods = (index) => {
        
        const newFoods = foods.filter((_,i) => i !== index);
        setFoods(newFoods);
    }

    return(<>
        <div>
            <h1>List of Foods</h1>
            <ol>
                {foods.map((food,index) => 
                    <li key={index} onClick={() => removeFoods(index)}>{food}</li>
                )}
            </ol>
            <input type="text" id="foodInput" placeholder="Enter some foods..."/>
            <button onClick={setAddFoods}>Add Food</button>
        </div>
    
    </>)
}
