import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const MainContainer = () => {// <-- Moved hook call to top
  const Movies = useSelector((store) => store?.movie?.nowPlaying);
  if (!Movies || Movies.length === 0) {
    return <div>Loading...</div>; // Handle loading state
  }
  const mainMovie = Movies?.[0]; // Assuming you want to display the first movie in the list
  return (
    <div className='relative'>
      <VideoTitle movieTitle={mainMovie} />
      <VideoBackground movieId={mainMovie} />
    </div>
  )
}

export default MainContainer
