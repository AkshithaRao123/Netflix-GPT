const VideoTitle = ({ title, overview }) => {
  return (
    <div className="z-10 py-28 px-10 w-1/4 text-white flex absolute top-100vh h-full mt-[20%] flex-col">
      <div class='blurr'>
        <div>
          <h1 style={{ paddingBottom: 10 }}>{title}</h1>
          <p>{overview}</p>
        </div>
        <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'row', height: 70 }}>
          <button style={{ width: '50%' }} className='m-2.5 hover:opacity-75'>▶ Play</button>
          <button style={{ width: '50%' }} className='m-2.5 hover:opacity-75'>More Info</button>
        </div>
      </div>
    </div>
  )
}

export default VideoTitle;