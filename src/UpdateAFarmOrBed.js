import React, {useState} from 'react'

function UpdateAFarmOrBed({allFarms, setAllFarms}) {

    const [inputState, setInputState] = useState({
        farmName: "",
        farmCity: "",
        farmState: "",
        farmId: "",
        sqFt: "",
        inUse: "Yes",
        crop: "",
        dtm: "",
        plantingDate: "",
        harvestDate: ""
    })
    
    const {
        farmName,
        farmCity,
        farmState,
        farmId,
        sqFt,
        inUse,
        crop,
        dtm,
        plantingDate,
        harvestDate
    } = inputState

    const updatedFarm = {
        name: farmName,
        city: farmCity,
        state: farmState,
    }

    const updatedBed = {
        farm_id: farmId,
        sq_ft: sqFt,
        in_use: inUse,
        crop: crop,
        dtm: dtm,
        planting_date: plantingDate,
        harvest_date: harvestDate
    }

    function onInputChange(e) {
        const value = e.target.value
        setInputState({
            ...inputState,
            [e.target.name]: value
        })
    }

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

    const selectOptions = allFarms.map(farm => <option key={farm.id} value={farm.name}>{farm.name}</option>)

    return (
        <div>
            <div className="add-a-farm-container">
                <h2>Update a Farm</h2>

                <form onSubmit={onUpdateFarm}>

                <select onChange={copyFarmData}>
                    <option value="Select a Farm">Select a Farm</option>
                    {selectOptions}
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

export default UpdateAFarmOrBed