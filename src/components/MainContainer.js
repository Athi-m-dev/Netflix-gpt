import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const MainContainer = () => {
  const Movies = useSelector((store) => store?.movie?.nowPlaying);
  if (!Movies || Movies.length === 0) {
    return <div>Loading...</div>;
  }
  console.log(Movies);
  const mainMovie = Movies?.[10];
  return (
    <div>
      <VideoTitle movieTitle={mainMovie} />
      <VideoBackground movieId={mainMovie} />
    </div>
  )
}

export default MainContainer