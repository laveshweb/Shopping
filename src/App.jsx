import { useState } from 'react'
import Header from './pages/Header'
import HeroSection from './pages/HeroSection'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='min-h-screen bg-white antialiased'>  
          {/* HEADER */}
          <Header/>
          {/* Hero */}
          <HeroSection/>

   </div>
  )
}

export default App
