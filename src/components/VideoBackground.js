import React from 'react'
import { useSelector } from 'react-redux';
import useTailer from '../Hooks/useTailer';

const VideoBackground = (props) => {
  const { id } = props.movieId;
  useTailer(id);
  const Tailer = useSelector((state) => state.movie.movieTailer.key);
  
  // Don't render iframe if no trailer key is available
  if (!Tailer) {
    return (
      <div className='w-screen aspect-video bg-black flex items-center justify-center'>
        <p className='text-white text-xl'>No trailer available</p>
      </div>
    );
  }

  return (
    <div className='w-screen'>
      <iframe 
        className='w-screen aspect-video'
        src={`https://www.youtube.com/embed/${Tailer}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&fs=0&loop=1&playlist=${Tailer}`}
        width="1920" 
        height="1080"
        frameBorder="0"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen; web-share" 
        allowFullScreen
      >
      </iframe>
    </div>
  )
}

export default VideoBackground
