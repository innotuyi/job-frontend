import React from 'react'
import Nav from './Nav'
import Job from './Job'
import Hero from './HeroPage'
import Footer from './Footer'
import SearchComponent from './SearchComponent'
import Category from './Categories'

function Home() {
  return (
    <>
    <Nav/>
    <Hero/>
    {/* <Category/> */}
    <Job/>
    <Footer/>
    <SearchComponent/>

    </>
  )
}

export default Home