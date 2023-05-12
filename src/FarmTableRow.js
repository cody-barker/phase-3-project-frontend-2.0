import React from 'react'

function FarmTableRow({farm, allFarms, setAllFarms}) {
    
    const {id, name, city, state} = farm

    function onDelete(){
        fetch(`http://localhost:9292/farms/${id}`, {
            method: "DELETE"
        })
        .then(r => r.json())
        .then(deletedFarm => { 
            setAllFarms([...allFarms].filter(farm => farm.id !== deletedFarm.id))
        })
    }

    return(
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{city}</td>
            <td>{state}</td>
            <td>
                <button onClick={onDelete} className="delete">Delete</button>
            </td>
        </tr>
    )
}

export default FarmTableRow