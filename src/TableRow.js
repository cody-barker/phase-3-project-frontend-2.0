import React from 'react'

function TableRow({bed, farmName, allFarms, setAllFarms}) {
    
    const {id, sq_ft, in_use, crop, dtm, planting_date, harvest_date} = bed

    let updatedBeds = []
    let updatedFarms = [...allFarms]

    function onDelete(){
        fetch(`http://localhost:9292/beds/${id}`, {
            method: "DELETE"
        })
        .then(r => r.json())
        .then(bed => {
            
            console.log(bed)

            for (let i=0; i < allFarms.length; i++){
                updatedBeds.push(allFarms[i].beds.filter(bed => bed.id !== id))
            }

            console.log(updatedBeds)

            for (let i=0; i < allFarms.length; i++){
                updatedFarms[i].beds = []
            }
            console.log(updatedFarms)

            for (let i=0; i < allFarms.length; i++){
                updatedFarms[i].beds.push(updatedBeds[i])
            }
            //The updatedFarms array is not structured in the same way as allFarms
            console.log(updatedFarms)

            setAllFarms(updatedFarms)
        })
    }

    return(
        <tr>
            <td>{farmName}</td>
            <td>{id}</td>
            <td>{sq_ft}</td>
            <td>{in_use}</td>
            <td>{crop}</td>
            <td>{dtm}</td>
            <td>{planting_date}</td>
            <td>{harvest_date}</td>
            <td>
                <button onClick={onDelete} className="delete">Delete</button>
            </td>
        </tr>
    )
}

export default TableRow