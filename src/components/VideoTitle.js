
const VideoTitle = (props) => {
  const {original_title , overview} = props.movieTitle ;
  return (
    <div className='w-screen aspect-video absolute text-white px-24 pt-[20%] bg-gradient-to-r from-black/70 to-transparent'>
      <h1 className='text-5xl font-bold mb-4 drop-shadow-lg'>{original_title}</h1>
      <p className='text-lg w-1/2 mb-6 drop-shadow-lg'>{overview}</p>
      <div className='flex gap-4'>
        <button className="px-8 py-3 bg-white text-black text-lg font-semibold rounded hover:bg-opacity-80 transition duration-300 ease-in-out shadow-lg flex items-center">
          <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
          </svg>
          Play
        </button>
        <button className="px-8 py-3 bg-gray-700 text-white text-lg font-semibold rounded hover:bg-gray-600 transition duration-300 ease-in-out shadow-lg flex items-center">
          <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          More Info
        </button>
      </div>
    </div>
  )
}

export default VideoTitle
