import React from 'react'
import CropTableRow from './CropTableRow'

function CropTable({allFarms, setAllFarms}) {

    let tableRowComps = []

    for (let i=0; i < allFarms.length; i++) { 
        tableRowComps.push(allFarms[i].beds.map(bed => {
            return (
                <CropTableRow 
                    key={bed.id}
                    bed={bed}
                    allFarms={allFarms}
                    setAllFarms={setAllFarms} 
                    farmName={allFarms[i].name}
                    farmID={allFarms[i].id}
                />
            )
        }))
    }

    return(
        <div>
            <table>
                <thead>
                    <tr>
                    <th>Farm Name</th>
                    <th>Farm ID</th>
                    <th>Bed ID</th>
                    <th>Sq Ft</th>
                    <th>In Use</th>
                    <th>Crop</th>
                    <th>DTM</th>
                    <th>Planting Date</th>
                    <th>Harvest Date</th>
                    <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {tableRowComps}
                </tbody>
            </table>
        </div>
    )
}

export default CropTable