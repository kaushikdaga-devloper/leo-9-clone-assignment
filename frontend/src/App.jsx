import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './pages/LandingPage/Hero'
import Footer from './components/Footer'
import TrustedBySection from './pages/LandingPage/TrustedBySection'
import Advertisement from './pages/LandingPage/Advertisment'
import FounderSection from './pages/LandingPage/Founder'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar></Navbar>
     <Hero></Hero>
     <Advertisement></Advertisement>
     <FounderSection></FounderSection>
     <TrustedBySection></TrustedBySection>
      <Footer></Footer>
    </>
  )
}

export default App
