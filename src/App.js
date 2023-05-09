import React, {useState, useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Home'
import AddAFarm from './AddAFarm'
import NavBar from './NavBar'
import './App.css';

function App() {

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
          <Route path="/" element={<Home allFarms={allFarms}/>}/>
          <Route path ="/addafarm" element={<AddAFarm />}/>
        </Routes>
    </div>
  );
}

export default App;
