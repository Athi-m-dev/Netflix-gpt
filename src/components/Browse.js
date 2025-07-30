import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SubContainer from './SubContainer';
const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SubContainer />
    </div>
  )
}

export default Browse;
