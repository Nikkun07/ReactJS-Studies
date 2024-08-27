import React, { useState } from "react";

function MyComponent()
{
    const [artists, setArtists] = useState(["Nikkun", "Sakuya"]);

    function addArtist()
    {
        const newArtist = document.getElementById("artistInput").value;
        document.getElementById("artistInput").value = "";

        setArtists(a => [...a, newArtist]);
    }

    function removeArtist(index)
    {
        setArtists(artists.filter((_, i) => i !== index))
    } 
    return(
        <div>
            <h2>List of Names</h2>
            <ul>
                {artists.map((artist, index) => 
                <li key={index} onClick={() => removeArtist(index)}>
                    {artist}
                </li>)}
            </ul>

            <input type="text" id="artistInput" placeholder="Enter artist name"/>
            <button onClick={addArtist}>Add Name</button>
        </div>
    );
}

export default MyComponent;