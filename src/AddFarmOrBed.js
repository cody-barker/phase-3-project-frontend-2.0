import React, {useState} from 'react'

function AddFarmOrBed({allFarms, setAllFarms}) {
    /**
     * Deliverables
     * 
     * [x] Have a controlled form that allows the user to add a farm
     * [] Allows the user to delete a farm
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
            setFarmName("")
            setFarmCity("")
            setFarmState("")
        })
    }

    return(
        <div>
            <div className="add-a-farm-container">
                <h2>Add a Farm</h2>
                <form onSubmit={onAddFarm}>
                    <label>Farm Name</label>
                    <input onChange={onFarmNameChange} value={farmName}  type="text"></input>
                    <label>City</label>
                    <input onChange={onFarmCityChange} value={farmCity} type="text"></input>
                    <label>State</label>
                    <input onChange={onFarmStateChange} value={farmState} type="text"></input>
                    <button className="update-btn" type="submit">Submit</button>
                </form>
            </div>
            <div className="add-a-bed-container">
                <h2>Add a Bed</h2>
           
            </div>
        </div>
    )
}

export default AddFarmOrBed