import React, {useState, useEffect} from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Home'
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
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path ="/addafarm">
            <AddAFarm />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
