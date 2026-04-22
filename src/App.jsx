import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import SystemSpecs from './components/SystemSpecs/SystemSpecs'
import Workload from './components/Workload/Workload'
import InstanceTiers from './components/InstanceTiers/InstanceTiers'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />
        <main>
          <Hero />
          <SystemSpecs />
          <Workload />
          <InstanceTiers />
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
