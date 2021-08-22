import React from 'react'
import { makeStyles, AppBar, Toolbar, Typography } from '@material-ui/core'
import InputFormLocal from './InputFormLocal'
import InputFormRemote from './InputFormRemote'
import VideoArea from './VideoArea'
import RtcClient from '../utils/RtcClient'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}))

const App = () => {
  const rtcClient = new RtcClient()
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            WebRTC
          </Typography>
        </Toolbar>
      </AppBar>
      <InputFormLocal rtcClient={rtcClient} />
      <InputFormRemote rtcClient={rtcClient} />
      <VideoArea rtcClient={rtcClient} />
    </div>
  )
}

export default App
