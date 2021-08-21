import React from 'react'

const Video = ({ isLocal, name, videoRef }) => {
  // isLocal: boolean

  // implement video on/off later
  return (
    <div>
      <video ref={videoRef} autoPlay={true} muted={isLocal} />
      <div>{name}</div>
    </div>
  )
}

export default Video
