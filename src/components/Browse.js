import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies';
import usePopularMovies from '../Hooks/usePopularMovies';
import useTopRatedMovies from '../Hooks/useTopRatedMovies';
import MainContainer from './MainContainer';
import SubContainer from './SubContainer';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies()
  const showGptSearchview = useSelector((store) => store?.gpt?.showGptSearch);
  return (
    <div>
      <Header />
      {showGptSearchview ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SubContainer />
        </>
      )}
    </div>
  );
};
export default Browse;
