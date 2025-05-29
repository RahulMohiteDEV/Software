import React from 'react'
import Farmer_info from "./components/Farmer_info"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarR from './components/NavbarR';
import NPK from "./components/NPK"
import WaterReport from './components/WaterReport ';
import Irrigation from './components/Irrigation';

function App() {
  return (
    <Router>
      <NavbarR />
      <Routes>
        <Route path="/" element={<Farmer_info />} />
        <Route path="/fertilizer-calculator" element={<NPK />} />
        <Route path="/WaterReport" element={ <WaterReport/>}/>
        <Route path='/Irrigation' element={<Irrigation/>}/>
      </Routes>
    </Router>
  );
}

export default App;