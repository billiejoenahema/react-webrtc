import React, { useRef, useEffect } from 'react'

const VideoLocal = ({ localPeerName }) => {
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
    <div>

    </div>
  )
}

export default VideoLocal
