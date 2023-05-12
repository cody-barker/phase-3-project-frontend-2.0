import React, {useState} from 'react'

function UpdateAFarm({allFarms, setAllFarms}) {

    const [inputState, setInputState] = useState({
        farmName: "",
        farmCity: "",
        farmState: "",
        farmId: "",
    })
    
    const {
        farmName,
        farmCity,
        farmState,
        farmId
    } = inputState

    const updatedFarm = {
        name: farmName,
        city: farmCity,
        state: farmState,
    }

    function onInputChange(e) {
        const value = e.target.value
        setInputState({
            ...inputState,
            [e.target.name]: value
        })
    }

    const farmSelectOptions = allFarms.map(farm => {
        return(
        <option 
            key={farm.id}
            value={farm.name}>
            {farm.name}
        </option>
        )
    })

    function onUpdateFarm(e) {
        e.preventDefault()
        fetch(`http://localhost:9292/farms/${farmId}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(updatedFarm)
        })
        .then(r => r.json())
        .then(patchedFarm => {
            const updatedFarms = allFarms.map(farm => {
                if (farm.id === patchedFarm.id) {
                    return patchedFarm
                } else {
                    return farm
                }
            })
            setAllFarms(updatedFarms)
        })
    }


    function copyFarmData(e) {
        if (e.target.value === "Select a Farm") {
            setInputState({
                ...inputState,
                farmName: "",
                farmCity: "",
                farmState: ""})}
        else {
            const farmToUpdate = allFarms.find(farm => farm.name === e.target.value)
            const {id, name, city, state} = farmToUpdate
            setInputState({
                ...inputState,
                farmId: id,
                farmName: name,
                farmCity: city,
                farmState: state})}
    }

    return (
        <div>
            <div className="update-a-farm-container">
                <h2>Update a Farm</h2>
                <form onSubmit={onUpdateFarm}>
                <select 
                    onChange={copyFarmData}>
                        <option
                            value="Select a Farm">
                            Select a Farm
                        </option>
                    {farmSelectOptions}
                </select>

                    <label>
                        Farm Name
                        <input 
                            onChange={onInputChange}
                            name="farmName"
                            value={farmName}
                            type="text">
                        </input>
                    </label>

                    <label>
                        City
                        <input 
                            onChange={onInputChange}
                            name="farmCity"
                            value={farmCity}
                            type="text">
                        </input>
                    </label>

                    <label>
                        State
                        <input 
                            onChange={onInputChange}
                            name="farmState"
                            value={farmState}
                            type="text">
                        </input>
                    </label>

                    <button className="update-btn" type="submit">Submit</button>
                </form>
            </div>
        </div>

    )
}

export default UpdateAFarm