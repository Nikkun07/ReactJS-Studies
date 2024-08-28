import React, { useState } from "react";

function ObjectArrays()
{

    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMaker, setCarMaker] = useState("");
    const [carModel, setCarModel] = useState("");

    function AddCar()
    {
        const newCar = {year: carYear, 
                        maker: carMaker, 
                        model: carModel}

        setCars(c => [...c, newCar]);
        
        setCarYear(new Date().getFullYear());
        setCarMaker("");
        setCarModel("");
    }
    function RemoveCar(index)
    {
        setCars(c => c.filter((_, i) => i !== index))
    }

    function yearChange(event)
    {
        setCarYear(event.target.value);
    }

    function makerChange(event)
    {
        setCarMaker(event.target.value);
    }

    function modelChange(event)
    {
        setCarModel(event.target.value);
    }
    return(
        <div>
            <h2>List of Car Objects</h2>
            <ul>
                {cars.map((car, index) => 
                <li key={index} onClick={() => RemoveCar(index)}>
                    {car.year} {car.maker} {car.model}

                </li>)}
            </ul>
            <input type="number" value={carYear} onChange={yearChange}/> <br />
            <input type="text" value={carMaker} onChange={makerChange} placeholder="Enter Car Maker"/> <br />
            <input type="text" value={carModel} onChange={modelChange} placeholder="Enter Car Model"/> <br />
            <button onClick={AddCar}>Add Car</button>
            
        </div>
    )
    
}

export default ObjectArrays;