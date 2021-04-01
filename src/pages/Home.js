import React, {useState} from 'react'
import DataSection from '../components/DataSection'
import DropDown from '../components/DropDown'
import Email from '../components/Email'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from'../components/Footer'

import {SliderData} from '../data/SliderData'
import {DataData} from '../data/DataData'
 

import GlobalStyle from '../globalStyles';

const Home = () => {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

    return (
    <>
    <GlobalStyle />
    <Navbar toggle={toggle} />
    <DropDown isOpen={isOpen} toggle={toggle} />
    <Hero slides ={SliderData} />
    <DataSection  {...DataData}/>
    <Email />
    <Footer />
    </>
  );
    
}

export default Home;
