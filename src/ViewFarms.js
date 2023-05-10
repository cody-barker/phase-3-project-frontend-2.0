import React from 'react'
import TableRow from './TableRow'

function ViewFarms({allFarms, setAllFarms}) {

    let tableRowComps = []

    for (let i=0; i < allFarms.length; i++) {
        tableRowComps.push(allFarms[i].beds.map(bed => <TableRow allFarms={allFarms} setAllFarms={setAllFarms} key={bed.id} bed={bed} farmName={allFarms[i].name}/>))
    }

    return(
        <div>
            <table>
                <thead>
                    <tr>
                    <th>Farm Name</th>
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

export default ViewFarms