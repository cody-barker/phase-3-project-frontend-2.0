import React, {useState} from 'react'

function AddRemoveFarm() {
    /**
     * Deliverables
     * 
     * [] Have a controlled form that allows the user to add a farm
     * [] Have a controlled form that allows the user to delete a farm
     */

    const [farmName, setFarmName] = useState("")
    const [farmCity, setFarmCity] = useState("")
    const [farmState, setFarmState] = useState("")

    function onFarmNameChange(e) {
        setFarmName(e.target.value)
    }

    function onFarmCityChange(e) {
        setFarmCity(e.target.value)
    }

    function onFarmStateChange(e) {
        setFarmState(e.target.value)
    }
    
    console.log(farmName)

    return(
        <div>
            <form>
                <label>Farm Name</label>
                <input onChange={onFarmNameChange} value={farmName}  type="text"></input>
                <label>City</label>
                <input onChange={onFarmCityChange} value={farmCity} type="text"></input>
                <label>State</label>
                <input onChange={onFarmStateChange} value={farmState} type="text"></input>
                <button className="update-btn" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddRemoveFarm