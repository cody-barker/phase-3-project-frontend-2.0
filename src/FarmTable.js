import React from "react";
import FarmTableRow from './FarmTableRow'

function FarmTable({allFarms, setAllFarms}) {

    const tableRowComps = allFarms.map(farm => {
        return(
            <FarmTableRow 
            key={farm.id}
            farm={farm}
            allFarms={allFarms}
            setAllFarms={setAllFarms}
            />
        )
    })
    
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Farm Name</th>
                    <th>Farm City</th>
                    <th>Farm State</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {tableRowComps}
            </tbody>
        </table>
    )
}

export default FarmTable