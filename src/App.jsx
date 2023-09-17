import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Homepage from './pages/Homepage'
import NavigationBar from './components/NavigationBar'
import '../src/styles/index.css'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div className="container">
        <NavigationBar/>
        <BrowserRouter>
          <Routes>
            <Route path='' element={<Homepage/>}/>
          </Routes>
        </BrowserRouter>
        <Footer/>
      </div>
    </>
  )
}

export default App
