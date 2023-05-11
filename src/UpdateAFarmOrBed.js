import React, {useState} from 'react'

function UpdateAFarmOrBed({allFarms, setAllFarms}) {

    /**
     * Deliverables
     * 
     * [] Have a form which autofills with a specific farms' data that needs to be updated
     * [] Have a form which autofills with a specific beds' data that needs to be updated
     * 
     * 
     * 1. Choose a farm by it's ID
     *      -Do so by entering an ID into an input
     *      -When that input changes, filter on ...allFarms for a farm with a matching ID
     *          -Then setState for farmName, city, and state based on the properties of that farm
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

    const updatedFarm = {
        id: farmId,
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

    //add a condition to updating state with the new farm only if the db addition is uniq


    function onUpdateFarm(e) {
        e.preventDefault()
        fetch('http://localhost:9292/farms', {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(updatedFarm)
        })
        .then(r => r.json())
        .then(farm => {
            setAllFarms([...allFarms, farm])
            setInputState({...inputState, farmName:"", farmCity:"", farmState:""})
        })
    }

    const selectOptions = allFarms.map(farm => <option key={farm.id} value={farm.id}>{farm.name}</option>)

    function onSelectFarmChange(e) {
        const selectedFarm = allFarms.find(farm => farm.id === e.target.value)
        const {name, city, state} = selectedFarm
        setInputState({...inputState, farmName:name, farmCity:city, farmState:state})
    }

    return (
        <div>
            <div className="add-a-farm-container">
                <h2>Update a Farm</h2>
                <form onSubmit={onUpdateFarm}>

                    <select onChange={onSelectFarmChange}>
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