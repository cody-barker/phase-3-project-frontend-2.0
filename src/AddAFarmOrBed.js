import React, {useState} from 'react'

function AddAFarmOrBed({allFarms, setAllFarms}) {
  
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

    const newFarm = {
        name: farmName,
        city: farmCity,
        state: farmState,
    }

    const newBed = {
        farm_id: farmId,
        sq_ft: sqFt,
        in_use: inUse,
        crop: crop,
        dtm: dtm,
        planting_date: plantingDate,
        harvest_date: harvestDate
    }

    function onInputChange(e) {
        setInputState({
            ...inputState,
            [e.target.name]: e.target.value
        })
    }

    function onAddFarm(e) {
        e.preventDefault()
        fetch('http://localhost:9292/farms', {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(newFarm)
        })
        .then(r => r.json())
        .then(newFarm => {
            if (allFarms.find(farm =>
                    farm.name === newFarm.name))
                    {alert("This farm already exists and will not be added.")}
            else {
                setAllFarms([...allFarms, newFarm])
                setInputState({
                    ...inputState, 
                    farmName:"",
                    farmCity:"",
                    farmState:""})}
        })
    }

    function onAddABed(e) {
        e.preventDefault()
        fetch('http://localhost:9292/beds', {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(newBed)
        })
        .then(r => r.json())
        .then(newBed => {
            if (allFarms.find(farm => farm.id === newBed.farm_id)) {
                const updatedFarms = allFarms.map(farm => {
                    if (farm.id === newBed.farm_id) {
                        farm.beds.push(newBed)
                        return(farm)
                    } else {
                        return farm
                    }
                })
                setAllFarms(updatedFarms)
                setInputState({
                    ...inputState, 
                    farmId: "",
                    sqFt: "",
                    inUse: "",
                    crop: "",
                    dtm: "",
                    plantingDate: "",
                    harvestDate: ""})}
            else {
                alert("Please enter a valid Farm ID.")
            }
        })
    }

    return(
        <div>
            <div className="add-a-farm-container">
                <h2>Add a Farm</h2>
                <form onSubmit={onAddFarm}>

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

            <div className="add-a-bed-container">
                <h2>Add a Bed</h2>
                <form onSubmit={onAddABed}>

                    <label>
                        Farm ID
                        <input
                        onChange={onInputChange}
                        name="farmId"
                        value={farmId}
                        type="number">
                        </input>
                    </label>

                    <label>
                        Square Feet
                        <input
                            onChange={onInputChange}
                            name="sqFt"
                            value={sqFt}
                            type="number">
                        </input>

                    </label>

                    <label>
                        In Use
                        <select 
                            onChange={onInputChange}
                            name="inUse"
                            value={inUse}>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                        </select>
                    </label>
        
                    <label>
                        Crop
                        <input
                            onChange={onInputChange}
                            name="crop"
                            value={crop}
                            type="text">
                        </input>
                    </label>

                    <label>
                        Days to Maturity
                        <input
                            onChange={onInputChange}
                            name="dtm"
                            value={dtm}
                            type="number">
                        </input>
                    </label>

                    <label>
                        Planting Date
                            <input
                                onChange={onInputChange}
                                name="plantingDate"
                                value={plantingDate}
                                type="date">
                            </input>
                    </label>

                    <label>
                        Harvest Date
                        <input
                            onChange={onInputChange}
                            name="harvestDate"
                            value={harvestDate}
                            type="date">
                        </input>
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AddAFarmOrBed