import React from 'react'
import TableRow from './TableRow'

function ViewFarms({allFarms}) {

    //tableRowComps = allFarms.map(farm => <TableRow farm={farm}/>)

    return(
        <div>
            <table>
                <thead>
                    <tr>
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
                
                </tbody>
            </table>
        </div>
    )
}

export default ViewFarms