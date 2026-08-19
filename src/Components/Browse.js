
import React from 'react'
import Header from './Header'



import useNowplayingMovies from '../hooks/useNowplayingMovies'
import Maincontainer from './Maincontainer'
import SecondaryContainer from './SecondaryContainer'

const Browse = () => {


  useNowplayingMovies()
  
  return (
    <div>

      <Header />
      <Maincontainer />
      <SecondaryContainer />
      
    </div>
  )
}

export default Browse
