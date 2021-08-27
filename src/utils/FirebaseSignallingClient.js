import firebase from 'firebase/app'
import 'firebase/database'

export default class FirebaseSignallingClient {
  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyASrCYaX3H0TnZQCxFM91v1_UbyLBhOkIM",
      authDomain: "react-webrtc-4afa9.firebaseapp.com",
      databaseURL: "https://react-webrtc-4afa9-default-rtdb.firebaseio.com",
      projectId: "react-webrtc-4afa9",
      storageBucket: "react-webrtc-4afa9.appspot.com",
      messagingSenderId: "442182341328",
      appId: "1:442182341328:web:bf8e6786d5a62bc3f004d5"
    }
    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig)
    }
    this.database = firebase.database()
    this.localPeerName = ''
    this.remotePeerName = ''
  }

  setPeerNames(localPeerName, remotePeerName) {
    this.localPeerName = localPeerName
    this.remotePeerName = remotePeerName
  }

  get targetRef() {
    return this.database.ref(this.remotePeerName)

  }

  async sendOffer(sessionDescription) {
    await this.targetRef.set({
      type: 'offer',
      sender: this.localPeerName,
      sessionDescription
    })
  }
}
