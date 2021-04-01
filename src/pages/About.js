import React, {useState}  from 'react'
import './about.css'
import Navbar from '../components/Navbar'
import DataSection from '../components/DataSection'
import Footer from'../components/Footer'
import {DataDataTwo} from '../data/DataData'
import DropDown from '../components/DropDown'
import GlobalStyle from '../globalStyles';


const About = () => {
  
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
    setIsOpen(!isOpen)
    }
  
    return (
        <>
          <GlobalStyle /> 
          <Navbar toggle={toggle} />
          <DropDown isOpen={isOpen} toggle={toggle} />
          <DataSection  {...DataDataTwo}/>
          <Footer />
        </>
    )
}

export default About;

