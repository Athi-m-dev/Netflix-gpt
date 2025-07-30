import React  from 'react'
import { useSelector } from 'react-redux';
import useTailer from '../Hooks/useTailer';
const VideoBackground = (props) => {
  const { id } = props.movieId;
  useTailer(id);
  const Tailer = useSelector((state) => state.movie.movieTailer.key);
  return (
    <div> 
      <div className='relative w-full'>
      <iframe className='w-screen aspect-video'
      src={"https://www.youtube.com/embed/" + Tailer} 
      title="YouTube video player" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      ></iframe>
      </div>
    </div>
  )
}

export default VideoBackground
