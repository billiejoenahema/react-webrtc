import React from 'react'
import { IconButton } from '@material-ui/core'
import VolumeOffIcon from '@material-ui/icons/VolumeOff'
import VolumeUpIcon from '@material-ui/icons/VolumeUp'

const VolumeButton = ({ isLocal, muted, setMuted, rtcClient }) => {
  const Icon = muted ? VolumeOffIcon : VolumeUpIcon

  return (
    <IconButton onClick={() => {
      setMuted((prev) => !prev)
      if (isLocal) rtcClient.toggleAudio()
    }} aria-label="switch mute">
      <Icon />
    </IconButton>
  )
}

export default VolumeButton
