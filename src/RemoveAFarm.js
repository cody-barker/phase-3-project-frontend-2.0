import React, {useState} from "react";

function RemoveAFarm({allFarms, setAllFarms}) {

    const [farmID, setFarmID] = useState("")

    const tableRows = allFarms.map(farm => {
        return (
            <tr key={farm.id}>
                <td>{farm.id}</td>
                <td>{farm.name}</td>
                <td>{farm.city}</td>
                <td>{farm.state}</td>
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
                            <th>Farm ID</th>
                            <th>Farm Name</th>
                            <th>Farm City</th>
                            <th>Farm State</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableRows}
                    </tbody>
                </table>
                <form onSubmit={onRemoveFarm}>
                    <label>Enter Farm ID
                    <input onChange={onFarmIDChange} type="number" value={farmID}></input>
                    </label>
                    <button className="delete" type="submit">Delete</button>
                </form>
            </div>
        </div>
    )
}

export default RemoveAFarm