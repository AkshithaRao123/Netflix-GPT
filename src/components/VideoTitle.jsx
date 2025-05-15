const VideoTitle = ({title, overview}) => {
  return (
    <div className="z-10 py-28 px-10 w-1/4 text-white flex items-end absolute top-50vh flex-col h-full">
      <h1>{title}</h1>
      <p>{overview}</p>
      <div>
        <button className='m-2.5 hover:opacity-75'>▶ Play</button>
        <button className='m-2.5 hover:opacity-75'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
