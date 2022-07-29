import React from 'react'
import FeaturedRooms from '../components/Featuredrooms/FeaturedRooms'
import Services from '../components/Services/Services'
import Banner from '../components/Banner/Banner'

const HomeScreen = () => {
  return (
        <div>
          <Banner />
          <Services />
          <FeaturedRooms />
        </div>
  )
}

export default HomeScreen