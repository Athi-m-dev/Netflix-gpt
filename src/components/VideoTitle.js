
const VideoTitle = (props) => {
  const {original_title , overview} = props.movieTitle ;
  return (
    <div className='absolute text-white px-10 pt-20'>
      <h1 className='text-3xl font-bold pt-20'>{original_title}</h1>
      <p className='pt-3 w-1/2'>{overview}</p>
      <div>
        <button className="mt-4 px-8 py-3 bg-white text-black text-lg font-semibold rounded hover:bg-opacity-80 transition duration-300 ease-in-out shadow-md">Play</button>
        <button className="mt-4 ml-4 px-8 py-3 bg-gray-700 text-white text-lg font-semibold rounded hover:bg-gray-600 transition duration-300 ease-in-out shadow-md">More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
