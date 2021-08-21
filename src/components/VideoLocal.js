import React, { useRef, useEffect } from 'react'
import Video from './Video'

const VideoLocal = ({ name }) => {
  const videoRef = useRef(null)
  const currentVideoRef = videoRef.current

  useEffect(() => {
    const getMedia = async () => {
      if (currentVideoRef === null) return
      const constraints = { audio: true, video: true }
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia(constraints);
        currentVideoRef.srcObject = mediaStream
      } catch (err) {
        console.error(err)
      }
    }
    getMedia()

  }, [currentVideoRef])

  return (
    <Video isLocal={true} name={name} videoRef={videoRef} />
  )
}

export default VideoLocal
