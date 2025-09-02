import { Navbar } from "./components/navbar/Navbar"
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import Education from "./components/Education/Education"
import Project from "./components/Project/Project"

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Project/>
    <Education/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
