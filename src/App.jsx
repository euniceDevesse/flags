import { useState } from 'react'

import './App.css'
import Country from './components/country/country'
import Header from './components/header/header'

function App() {

  return (
    <div>
      <Header />
      <div className="body">
      <Country/>
      </div>
    </div>
  )
}

export default App
