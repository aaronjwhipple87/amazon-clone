import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyCwQ9yMu-UWW3XdQn3Ahp6Bma9vJdIWgvs",
	authDomain: "clone-c91ab.firebaseapp.com",
	databaseURL: "https://clone-c91ab-default-rtdb.firebaseio.com",
	projectId: "clone-c91ab",
	storageBucket: "clone-c91ab.appspot.com",
	messagingSenderId: "398404059515",
	appId: "1:398404059515:web:c77aa57f7d85041d953dde",
	measurementId: "G-VMHMPPFB2Y"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

