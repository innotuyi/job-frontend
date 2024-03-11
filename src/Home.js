import React from 'react'
import Nav from './Nav'
import Job from './Job'
import Hero from './Hero'
import Footer from './Footer'
import SearchComponent from './SearchComponent'

function Home() {
  return (
    <>
    <Nav/>
    <Hero/>
    <SearchComponent/>
    <Job/>
    <Footer/>
    </>
  )
}

export default Home