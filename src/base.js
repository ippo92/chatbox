import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDagmJtGW22mGmyMdTiO6RQbRBHl4ss-wc",
    authDomain: "chatbox-e245e.firebaseapp.com",
    databaseURL: "https://chatbox-e245e.firebaseio.com"
})

const base = Rebase.createClass(firebase.database())


export { firebaseApp }

export default base