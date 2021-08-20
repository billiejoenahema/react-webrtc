import React, { useState } from 'react'
import { makeStyles, AppBar, Toolbar, Typography } from '@material-ui/core'
import InputFormLocal from './InputFormLocal'
import InputFormRemote from './InputFormRemote'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}))

const getMedia = async () => {
  const constraints = { audio: true, video: true }

  try {
    return await navigator.mediaDevices.getUserMedia(constraints);
    /* ストリームを使用 */
  } catch (err) {
    /* エラーを処理 */
    console.error(err)
  }
}

getMedia()

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
    </div>
  )
}

export default App
