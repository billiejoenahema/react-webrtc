import React, { useState } from 'react'
import { makeStyles, AppBar, Toolbar, Typography } from '@material-ui/core'
import InputFormLocal from './InputFormLocal'
import InputFormRemote from './InputFormRemote'
import VideoArea from './VideoArea'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}))

const App = () => {
  const classes = useStyles()
  const [localPeerName, setLocalPeerName] = useState('')
  const [remotePeerName, setRemotePeerName] = useState('')

  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            WebRTC
          </Typography>
        </Toolbar>
      </AppBar>
      <InputFormLocal
        localPeerName={localPeerName}
        setLocalPeerName={setLocalPeerName}
      />
      <InputFormRemote
        localPeerName={localPeerName}
        remotePeerName={remotePeerName}
        setRemotePeerName={setRemotePeerName}
      />
      <VideoArea
        localPeerName={localPeerName}
        remotePeerName={remotePeerName}
      />
    </div>
  )
}

export default App
