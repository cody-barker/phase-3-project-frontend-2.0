import React, {useState, useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'
import CropTable from './CropTable'
import AddAFarmOrBed from './AddAFarmOrBed'
import UpdateAFarm from './UpdateAFarm'
import FarmTable from './RemoveAFarm'
import NavBar from './NavBar'
import './App.css';

function App() {
   
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
            path="/farmtable"
            element={<FarmTable allFarms={allFarms} setAllFarms={setAllFarms}/>}/>
          <Route 
            path ="/add"
            element={<AddAFarmOrBed allFarms={allFarms} setAllFarms={setAllFarms}/>}/>
          <Route 
            path="/updateafarm"
            element={<UpdateAFarm allFarms={allFarms} setAllFarms={setAllFarms}/>}/>
        </Routes>
    </div>
  );
}

export default App;
