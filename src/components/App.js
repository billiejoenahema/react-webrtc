import React from 'react'
import { makeStyles, AppBar, Toolbar, Typography } from '@material-ui/core'
import InputForms from './InputForms'
import VideoArea from './VideoArea'
import useRtcClient from './hooks/useRtcClient'

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
  const rtcClient = useRtcClient()

  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            WebRTC
          </Typography>
        </Toolbar>
      </AppBar>
      <InputForms rtcClient={rtcClient} />
      <VideoArea rtcClient={rtcClient} />
    </div>
  )
}

export default App
