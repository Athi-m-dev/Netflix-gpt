import React from 'react'
import MovieCards from './MovieCards';
const MovieList = ({title , moviesList}) => {
  return (
    <div className='px-4 '>
      <h2 className=' text-white text-2xl font-bold pb-4'>{title}</h2>
      <div 
        className='flex overflow-x-scroll scrollbar-hide' 
        style={{
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none',
          WebkitScrollbar: { display: 'none' }
        }}
      >
        <div className='flex '>
          {moviesList.map((movie) => (
            <MovieCards key={movie.id} posterpath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MovieList
