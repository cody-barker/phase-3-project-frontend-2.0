import React, {useState, useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'
import ViewFarms from './ViewFarms'
import AddFarmOrBed from './AddFarmOrBed'
import RemoveAFarm from './RemoveAFarm'
import NavBar from './NavBar'
import './App.css';

function App() {
  /**
   * Deliverables
   * [x]Use Active Record
   * [x] At least two models with a one-to-many relationship
   * [x] Create and use at least Create and Read actions in Sinatra for both models
   * [] Full CRUD for one model
   * [] Update action should use a pre-filled form with the existing values for the object.
   * [] On submission of the update form, the object should update/re-render
   * [] Build a React front end that interacts with the API to perform CRUD actions
   * [] Proper front end state management. Do NOT rely on GET requests to update state.
   * [x] RESTful routes
   * [] Use JSON responses to get new data. Don't rely on filtering state or separate fetch requests. 
   * [] Include some validation so farms can't be duplicated if all fields match
   * [] Include some validation so beds can't created if the farm doesn't exist
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
   *    ViewFarms (READ)
   *      TableRow (DELETE)
   *    AddFarmOrBed (CREATE)
   *    UpdateFarmOrBed (UPDATE)
   *    RemoveFarm (DELETE)
   * 
   * 
   * DB Schema
   * table "beds"
    t.integer "sq_ft"
    t.string "in_use"
    t.string "crop"
    t.date "planting_date"
    t.date "harvest_date"
    t.integer "farm_id"
    t.integer "dtm"

    table "farms"
    t.string "name"
    t.string "city"
    t.string "state"
   * 
   */

  const [allFarms, setAllFarms] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/farms")
    .then(r => r.json())
    .then(farms => setAllFarms(farms))
  },[])

  console.log(allFarms)

  return (
    <div className="App">
      <NavBar />
        <Routes>
          <Route 
            path="/" 
            element={<ViewFarms allFarms={allFarms} setAllFarms={setAllFarms}/>}/>
          <Route 
            path ="/add"
            element={<AddFarmOrBed allFarms={allFarms} setAllFarms={setAllFarms}/>}/>
          <Route 
            path="/remove"
            element={<RemoveAFarm allFarms={allFarms} setAllFarms={setAllFarms}/>}/>
        </Routes>
    </div>
  );
}

export default App;
