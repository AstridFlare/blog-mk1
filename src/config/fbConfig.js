import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
	apiKey: 'AIzaSyDXcjp08r0T86AB7vmk6svWZo2_g1z8g2U',
	authDomain: 'blog-mk1.firebaseapp.com',
	databaseURL: 'https://blog-mk1.firebaseio.com',
	projectId: 'blog-mk1',
	storageBucket: 'blog-mk1.appspot.com',
	messagingSenderId: '410874332528'
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
