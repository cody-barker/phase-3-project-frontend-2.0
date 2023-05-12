import React, {useState, useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'
import CropTable from './CropTable'
import AddAFarmOrBed from './AddAFarmOrBed'
import UpdateAFarmOrBed from './UpdateAFarmOrBed'
import FarmTable from './RemoveAFarm'
import NavBar from './NavBar'
import './App.css';

function App() {
  /**
   * Deliverables
   * [x]Use Active Record
   * [x] At least two models with a one-to-many relationship
   * [x] Create and use at least Create and Read actions in Sinatra for both models
   * [x] Full CRUD for one model
   * [x] Update action should use a pre-filled form with the existing values for the object.
   * [x] On submission of the update form, the object should update/re-render
   * [x] Build a React front end that interacts with the API to perform CRUD actions
   * [x] Proper front end state management. Do NOT rely on GET requests to update state.
   * [x] RESTful routes
   * [x] Use JSON responses to get new data. Don't rely on filtering state or separate fetch requests. 
   * [x] Include some validation so farms can't be duplicated if all fields match
   * [] Clear fields for add a bed after submission
   * [] Include some validation so beds can't be created if the farm doesn't exist
   * [] Include Update option for Beds
   * [] Write some interesting queries
   * 
   * Features
   * - The API has a farms table and an associated beds table. A farm has many beds, and a bed belongs to a farm.
   * - A user can create new farms and new beds. (CREATE)
   * - A user can view a table of all farms and all beds. (READ)
   * - A user can update a farm. (UPDATE)
   * - A user can delete farms and beds. (DELETE)
   * 
   * Component Hierachy
   * App
   *    NavBar
   *    CropTable (READ)
   *      TableRow (DELETE)
   *    AddAFarmOrBed (CREATE)
   *    UpdateAFarmOrBed (UPDATE)
   *    RemoveFarm (DELETE)
   */ 
   
  const [allFarms, setAllFarms] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/farms")
    .then(r => r.json())
    .then(farms => setAllFarms(farms))
  },[])

  return (
    <div className="App">
      <NavBar />
        <Routes>
          <Route 
            path="/" 
            element={<CropTable allFarms={allFarms} setAllFarms={setAllFarms}/>}/>
          <Route 
            path ="/add"
            element={<AddAFarmOrBed allFarms={allFarms} setAllFarms={setAllFarms}/>}/>
          <Route 
            path="/update"
            element={<UpdateAFarmOrBed allFarms={allFarms} setAllFarms={setAllFarms}/>}/>
          <Route 
            path="/farmtable"
            element={<FarmTable allFarms={allFarms} setAllFarms={setAllFarms}/>}/>
        </Routes>
    </div>
  );
}

export default App;
