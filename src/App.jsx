import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Homepage from './pages/Homepage'
import NavigationBar from './components/NavigationBar'
import Footer from './components/Footer'
import HomeResponsiveNavigation from './components/HomeResponsiveNavigation'

function App() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
        <div className="hrn_aw_container">
        <HomeResponsiveNavigation/>
        </div>
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
