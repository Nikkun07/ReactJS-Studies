// React Hook = Specual function that allows functional components
//              to use React features without writing class components
//              (useState, useEffect, useContext, useReducer, useCallback, etc.)

// useState() = A React hook that allows the creation of a stateful variable AND a
//              setter function to update its value in the Virtual DOM [name, setName]



import React, {useState} from 'react';

function Component()
{
    const [name, setName] = useState("Anon");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () =>
    {
        setName("Nikkun");
    }

    const incAge = () =>
    {
        setAge(age + 1);
    }

    const toggleEmployment = () =>
    {
        setIsEmployed(!isEmployed);
    }
    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={incAge}>Increment Age</button>

            <p>Is Employed: {isEmployed? 'Hell Yeah' : 'No. Womp Womp'}</p>
            <button onClick={toggleEmployment}>Toggle Status</button>
        </div>)
}

export default Component;