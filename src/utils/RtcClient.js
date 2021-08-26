import FirebaseSignallingClient from './FirebaseSignallingClient'

export default class RtcClient {
  constructor(setRtcClient, remoteVideoRef) {
    const config = {
      iceServers: [{ urls: "stun:stun.stunprotocol.org" }]
    }
    this.rtcPeerConnection = new RTCPeerConnection(config)
    this.firebaseSignallingClient = new FirebaseSignallingClient()
    this.localPeerName = ''
    this.remotePeerName = ''
    this.remoteVideoRef = remoteVideoRef
    this._setRtcClient = setRtcClient
    this.mediaStream = null
  }

  setRtcClient() {
    this._setRtcClient(this)
  }

  async getUserMedia() {
    try {
      const constraints = { audio: true, video: true }
      this.mediaStream = await navigator.mediaDevices.getUserMedia(constraints)
    } catch (error) {
      console.error(error)
    }
  }

  async setMediaStream() {
    await this.getUserMedia()
    this.addTracks()
    this.setRtcClient()
  }

  addTracks() {
    this.addAudioTrack()
    this.addVideoTrack()
  }

  addAudioTrack() {

    this.RTCPeerConnection.addTrack(this.audioTrack, this.mediaStream)
  }

  addVideoTrack() {
    const videoTrack = this.mediaStream.getVideoTracks()[0]
    this.RTCPeerConnection.addTrack(this.videoTrack, this.mediaStream)
  }

  get audioTrack() {
    return this.mediaStream.getAudioTracks()[0]
  }

  get videoTrack() {
    return this.mediaStream.getVideoTracks()[0]
  }

  setOntrack() {
    this.rtcPeerConnection.ontrack = (rtcTrackEvent) => {
      if (rtcTrackEvent.track.kind !== 'video') return
      const remoteMediaStream = rtcTrackEvent.streams[0]
      this.remoteVideoRef.current.srcObject = remoteMediaStream
      this.setRtcClient()
    }

    this.setRtcClient()
  }

  connect(remotePeerName) {
    this.remotePeerName = remotePeerName
    this.setOnicecandidateCallback()
    this.setOntrack()
    this.setRtcClient()
  }

  setOnicecandidateCallback() {
    this.rtcPeerConnection.onicecandidate = ({ candidate }) => {
      if (candidate) {
        // send candidate to remote
      }
    }
  }

  startListening(localPeerName) {
    this.localPeerName = localPeerName
    this.setRtcClient()
    this.firebaseSignallingClient.database
      .ref(localPeerName)
      .on('value', (snapshot) => {
        const data = snapshot.val()

      })
  }
}
