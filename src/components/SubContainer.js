import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const SubContainer = () => {
  const movies = useSelector((store) => store?.movie?.nowPlaying);
  const popularMovies = useSelector((store) => store?.movie?.popularMovies);
  const topRatedMovies = useSelector((store) => store?.movie?.topRatedMovies);
  return (
    <div className='bg-black'>
      <div className='-mt-52 pl-10 relative z-20'>
        <MovieList title="Now Playing" moviesList={movies} />
        <MovieList title="Popular Movies" moviesList={popularMovies} />
        <MovieList title="Top Rated" moviesList={topRatedMovies} />
      </div>
    </div>
  )
}

export default SubContainer;
