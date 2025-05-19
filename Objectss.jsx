import { useState } from "react"



export default function Objectss (){

    const [car, setCar] = useState({year: 2025,
                                    make: "Mustang",
                                    model: "Ford"})

    const setYear = (e) => {
        setCar(c => ({...c, year: e.target.value}));
    }

    const setMake = (e) => {
         setCar(c => ({...c, make: e.target.value}));
    }


    const setModel = (e) => {
         setCar(c => ({...c, model: e.target.value}));
    }

    return(<>
    <div>
        <p>Your favorite car is: {car.year} {car.make} {car.model} </p>
        <input type="number" value={car.year} onChange={setYear}></input>
        <input type="text" value={car.make} onChange={setMake}></input>
        <input type="text" value={car.model} onChange={setModel}></input>
    </div>
    </>)
}
