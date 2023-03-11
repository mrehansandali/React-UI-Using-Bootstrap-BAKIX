import React from 'react'
import "./App.css"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './Components/navbar/Navbar'
import Laptop from './Components/virtual/laptop/Laptop'
import Oculus from './Components/virtual/oculus/Oculus'
import Virtual from './Components/virtual/Virtual'

function App() {
  return (
    <div>
      <Navbar />
      {/* <Virtual /> */}
      <Router>
        <Routes>
          <Route exact path='/' element={<Virtual />}></Route>
          <Route exact path='/oculus' element={<Oculus />}></Route>
          <Route exact path='/laptop' element={<Laptop />}></Route>
        </Routes>
      </Router>


    </div>
  )
}

export default App