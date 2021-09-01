import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { IconButton } from '@material-ui/core'
import VolumeOffIcon from '@material-ui/icons/VolumeOff'
import VolumeUpIcon from '@material-ui/icons/VolumeUp'

const useStyles = makeStyles({
  icon: {
    height: 36,
    width: 36,
  }
})

const VolumeButton = ({ isLocal, muted, setMuted, rtcClient }) => {
  const Icon = muted ? VolumeOffIcon : VolumeUpIcon
  const classes = useStyles()

  return (
    <IconButton onClick={() => {
      setMuted((prev) => !prev)
      if (isLocal) rtcClient.toggleAudio()
    }} aria-label="switch mute">
      <Icon className={classes.icon} />
    </IconButton>
  )
}

export default VolumeButton
