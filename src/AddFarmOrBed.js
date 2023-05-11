import React, {useState} from 'react'

function AddFarmOrBed({allFarms, setAllFarms}) {
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
        sqFt,
        inUse,
        crop,
        dtm,
        plantingDate,
        harvestDate
    } = inputState

    // const [farmName, setFarmName] = useState("")
    // const [farmCity, setFarmCity] = useState("")
    // const [farmState, setFarmState] = useState("")
    // const [sqFt, setSqFt] = useState("")
    // const [inUse, setInUse] = useState("")

    // function onFarmNameChange(e) {
    //     setFarmName(e.target.value)
    // }

    // function onFarmCityChange(e) {
    //     setFarmCity(e.target.value)
    // }

    // function onFarmStateChange(e) {
    //     setFarmState(e.target.value)
    // }

    // function onSqFtChange(e) {
    //     setSqFt(e.target.value)
    // }

    // function onInUseChange(e) {
    //     setInUse(e.target.value)
    // }

    const newFarm = {
        name: farmName,
        city: farmCity,
        state: farmState,
    }

    //add a condition to updating state with the new farm only if the db addition is uniq


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

                <form>
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
                </form>
            </div>
        </div>
    )
}

export default AddFarmOrBed