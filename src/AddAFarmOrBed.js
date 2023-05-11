import React, {useState} from 'react'

function AddAFarmOrBed({allFarms, setAllFarms}) {
    /**
     * Deliverables
     * 
     * [x] Have a controlled form that allows the user to add a farm
     * [] Allows the user to delete a farm
     */

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

    function onInputChange(e) {
        const value = e.target.value
        setInputState({
            ...inputState,
            [e.target.name]: value
        })
    }

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
        .then(farm => {
            setAllFarms([...allFarms, farm])
            setInputState({...inputState, farmName:"", farmCity:"", farmState:""})
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
        .then(bed => console.log(bed))
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
                        type="number"
                        name="farmId"
                        onChange={onInputChange}
                        value={farmId}>
                        </input>
                    </label>

                    <label>
                        Square Feet
                        <input 
                            type="number"
                            name="sqFt"
                            onChange={onInputChange}
                            value={sqFt}>
                        </input>

                    </label>

                    <label>
                        In Use
                        <select 
                            onChange={onInputChange}
                            value={inUse}
                            name="inUse">
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                        </select>
                    </label>
        
                    <label>
                        Crop
                        <input
                            type="text"
                            onChange={onInputChange}
                            value={crop}
                            name="crop">
                        </input>
                    </label>

                    <label>
                        Days to Maturity
                        <input
                            type="number"
                            onChange={onInputChange}
                            value={dtm}
                            name="dtm">
                        </input>
                    </label>

                    <label>
                        Planting Date
                            <input
                                type="date"
                                onChange={onInputChange}
                                name="plantingDate"
                                value={plantingDate}>
                            </input>
                    </label>

                    <label>
                        Harvest Date
                        <input
                            name="harvestDate"
                            type="date"
                            onChange={onInputChange}
                            value={harvestDate}>
                        </input>
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AddAFarmOrBed