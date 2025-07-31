import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies';
import usePopularMovies from '../Hooks/usePopularMovies';
import useTopRatedMovies from '../Hooks/useTopRatedMovies';
import MainContainer from './MainContainer';
import SubContainer from './SubContainer';

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies()
  return (
    <div>
      <Header />
      <MainContainer />
      <SubContainer />
    </div>
  )
}

export default Browse;
