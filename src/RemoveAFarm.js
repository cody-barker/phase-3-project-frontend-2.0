import React, {useState} from "react";

function RemoveAFarm({allFarms, setAllFarms}) {

    const [farmID, setFarmID] = useState("")

    const tableRows = allFarms.map(farm => {
        return (
            <tr key={farm.id}>
                <td>{farm.name}</td>
                <td>{farm.id}</td>
            </tr>
         )
    })

    function onFarmIDChange(e) {
        setFarmID(e.target.value)
    }

    function onRemoveFarm(e) {
        fetch(`http://localhost:9292/farms/${farmID}`, {
            method: "DELETE"
        })
        .then(r => r.json())
        .then(deletedFarm => {
            console.log(deletedFarm)
            setAllFarms(...allFarms.filter(farm => farm.id !== deletedFarm.id))
            setFarmID("")
        })
    }

    return(
        <div>
            <div className="remove-farm-container">
                <h2>Remove a Farm</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Farm Name</th>
                            <th>Farm ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableRows}
                    </tbody>
                </table>
                <form onSubmit={onRemoveFarm}>
                    <label>Enter Farm ID
                    <input onChange={onFarmIDChange} type="integer" value={farmID}></input>
                    </label>
                    <button className="delete">Delete</button>
                </form>
            </div>
        </div>
    )
}

export default RemoveAFarm