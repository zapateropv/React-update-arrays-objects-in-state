import {useState} from 'react'

export default function Component (){

    const [car, setCar] = useState([]);
    const [year, setYear] = useState(new Date().getFullYear());
    const [make, setMake] = useState("");
    const [model, setModel] = useState("");

    const setCar1 = () => {
        const updatedCar = {year: year,
                            make: make,
                            model: model
        }

        setCar(c => [...c, updatedCar]);
        setMake("")
        setModel("")
        setYear(new Date().getFullYear())
    }

    const setYear1 = (e) => {
        setYear(e.target.value)
    }

    const setMake1 = (e) => {
        setMake(e.target.value)
    }

    const setModel1 = (e) => {
        setModel(e.target.value)
    }

    const handleDelete = (index) => {
        
        const updated = car.filter((_, i) => i !== index);
        setCar(updated);
      
    }


    return(<>
        <div>
            <h1>List of Car Objects</h1>
            <ol>
                {car.map((car1, index) => <li key={index}
                onClick={() => handleDelete(index)}>{car1.year} {car1.make} {car1.model}</li>)}
            </ol>
            <input type='number' value = {year} onChange={setYear1} placeholder='enter year'/>
            <input type='text' value = {make}  onChange={setMake1} placeholder='enter make'/>
            <input type='text' value = {model} onChange={setModel1} placeholder='enter model'/>
            <button onClick={setCar1}>Submit</button>
        </div>
    </>)
}
