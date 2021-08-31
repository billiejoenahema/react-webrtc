import React, { useState, useRef } from 'react'
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography
} from '@material-ui/core'
import useDimensions from './hooks/useDimensions'
import VolumeButton from './VolumeButton'

const Video = ({ isLocal, name, videoRef }) => {
  const refCard = useRef(null)
  const dimensionsCard = useDimensions(refCard)
  const [muted, setMuted] = useState(true)

  return (
    <Card ref={refCard}>
      <CardActionArea>
        <video
          ref={videoRef}
          autoPlay={true}
          muted={isLocal || muted}
          width={dimensionsCard.width}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <VolumeButton muted={muted} setMuted={setMuted} />
      </CardActions>
    </Card>
  )
}

export default Video
