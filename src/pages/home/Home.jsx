import React from 'react'
import Chose from './Homecomponents/Chose'
import Plan from './Homecomponents/Plan'
import Pricing from './Homecomponents/Pricing'
import Testimonial from './Homecomponents/Testimonial'
import Booking from './Homecomponents/Booking'
import Breakdown from './Homecomponents/Breakdown'
import Header from '../../shared/Header'

const Home = () => {
  return (
    <>
      <Header/>
      <Chose/>
      <Plan/>
      <Pricing/>
      <Testimonial/>
      <Breakdown/>
      <Booking/>
    </>
  )
}

export default Home
