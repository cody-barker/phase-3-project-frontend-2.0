import React from 'react'
import TableRow from './TableRow'

function ViewFarms({allFarms}) {

    console.log(allFarms)

    const tableRowComps = []

    for (let i=0; i < allFarms.length; i++) {
        tableRowComps.push(allFarms[i].beds.map(bed => <TableRow key={bed.id} bed={bed} farmName={allFarms[i].name}/>))
    }

    console.log(tableRowComps)

    //allFarms.map(farm => <TableRow farm={farm} key={farm.beds.index}/>)
    // const testBeds = allFarms[0].map(bed => <TableRow bed={bed}/>)
    // console.log(testBeds)

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