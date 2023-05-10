import React from 'react'

function TableRow({bed, farmName, allFarms, setAllFarms}) {
    
    //A TableRow is created by inputting the values of a single bed
    //I need to map over an array of every bed to create each table row
    //I can get an array of every bed by mapping over each farms beds and returning each bed

    const {id, sq_ft, in_use, crop, dtm, planting_date, harvest_date} = bed

    // function onDelete(){
    //     fetch(`http://localhost:9292/beds/${id}`, {
    //         method: "DELETE"
    //     })
    //     .then(r => r.json())
    //     .then(bed => {
    //         setAllFarms([...allFarms].filter(obj => obj.id !== id))
    //     })
    // }

    //add onClick={onDelete}

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
                <button className="delete">Delete</button>
            </td>
        </tr>
    )
}

export default TableRow