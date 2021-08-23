import React, { useState, useEffect, useCallback } from 'react'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Link from '@material-ui/core/Link'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://www.nahema.net/">
        彩りある人生を
      </Link>{' '}
      {2016}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

export default function SignIn({ rtcClient, setRtcClient }) {
  const label = 'あなたの名前'
  const classes = useStyles()
  const [name, setName] = useState('')
  const [disabled, setDisabled] = useState(true)
  const [isComposed, setIsComposed] = useState(false)

  useEffect(() => {
    // 両端のスペースを取り除く
    const trimmedName = name.trim()
    const bool = trimmedName === ''
    setDisabled(bool)
  }, [name])

  const handleKeyDown = (e) => {
    // 両端のスペースを取り除く
    const trimmedValue = e.target.value.trim()
    if (isComposed) return
    if (trimmedValue === '') return
    if (e.key === 'Enter') initializeLocalPeer(e)
  }

  const initializeLocalPeer = useCallback((e) => {
    e.preventDefault()
    rtcClient.localPeerName = name
    setRtcClient(rtcClient)
  }, [name, rtcClient, setRtcClient])

  if (rtcClient.localPeerName) return <></>

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          {label}を入力してください
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label={label}
            name="name"
            autoFocus
            onChange={(e) => setName(e.target.value)}
            onCompositionStart={() => setIsComposed(true)}
            onCompositionEnd={() => setIsComposed(false)}
            onKeyDown={(e) => handleKeyDown(e)}
            value={name}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={disabled}
            onClick={(e) => initializeLocalPeer(e)}
          >
            決定
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  )
}
