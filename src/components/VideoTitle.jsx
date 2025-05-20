const VideoTitle = ({ title, overview }) => {
  return (
    <div className="z-10 px-10 w-1/4 text-white flex absolute mt-[40%] flex-col ">
      <div className='blurr w-[300px] md:w-[400px]'>
        <div>
          <h1 className="text-lg text-bold" style={{ paddingBottom: 10 }}>{title}</h1>
          <p className="hidden md:inline-block">{overview}</p>
        </div>
        <div className="hidden sm:hidden md:flex md:flex-row h-[70] md:justify-center">
          <button className='m-2.5 hover:opacity-75 w-[50%]'>▶ Play</button>
          <button className='m-2.5 hover:opacity-75 w-[50%]'>More Info</button>
        </div>
      </div>
    </div>
  )
}

export default VideoTitle;

// justify-center none md:flex flex-row h-70