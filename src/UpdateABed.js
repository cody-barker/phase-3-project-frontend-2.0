import React, {useState} from 'react'

function UpdateABed() {

    const [inputState, setInputState] = useState({
        bedId:"",
        sqFt: "",
        inUse: "Yes",
        crop: "",
        dtm: "",
        plantingDate: "",
        harvestDate: ""
    })

    const {
        bedId,
        sqFt,
        inUse,
        crop,
        dtm,
        plantingDate,
        harvestDate
    } = inputState

    const updatedBed = {
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


    function onUpdateABed(e) {
        e.preventDefault()
        fetch(`http://localhost:9292/beds/${bedId}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(updatedBed)
        })
        .then(r => r.json())
        .then(bed => console.log(bed))
    }
  

    return(
        <div className="update-a-bed-container">
            <h2>Update a Bed</h2>
            <form onSubmit={onUpdateABed}>

                <label>
                    Bed ID
                    <input
                    type="number"
                    name="bedId"
                    onChange={onInputChange}
                    value={bedId}>
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
    )
}

export default UpdateABed
