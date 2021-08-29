import React, { useRef, useEffect } from 'react'
import Video from './Video'

const VideoRemote = ({ rtcClient }) => {
  const videoRef = useRef(null)
  const currentVideoRef = videoRef.current
  const mediaStream = rtcClient.mediaStream

  useEffect(() => {
    if (currentVideoRef === null) return

    const getMedia = () => {
      try {
        currentVideoRef.srcObject = mediaStream
      } catch (err) {
        console.error(err)
      }
    }
    getMedia()

  }, [currentVideoRef, mediaStream])

  return (
    <Video
      isLocal={false}
      name={rtcClient.remotePeerName}
      videoRef={videoRef}
    />
  )
}

export default VideoRemote

