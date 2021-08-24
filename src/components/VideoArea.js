import React from 'react'
import { makeStyles, Grid } from '@material-ui/core'
import VideoLocal from './VideoLocal'
import VideoRemote from './VideoRemote'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const VideoArea = ({ rtcClient }) => {
  const classes = useStyles()
  if (rtcClient === null) return <></>

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <VideoLocal rtcClient={rtcClient} />
        </Grid>
        <Grid item xs={6}>
          <VideoRemote rtcClient={rtcClient} />
        </Grid>
      </Grid>
    </div>
  )
}

export default VideoArea
