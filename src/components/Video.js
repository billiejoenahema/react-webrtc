import React, { useRef } from 'react'
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography
} from '@material-ui/core'
import useDimensions from './hooks/useDimensions'

const Video = ({ isLocal, name, videoRef }) => {
  const refCard = useRef(null)
  const dimensionsCard = useDimensions(refCard)

  return (
    <Card ref={refCard}>
      <CardActionArea>
        <video
          ref={videoRef}
          autoPlay={true}
          muted={isLocal}
          width={dimensionsCard.width}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
  )
}

export default Video
