import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/functions';

const config = {
  apiKey: 'AIzaSyANkU9YwZHBQHo919vII2DkO9Y83nIbuXQ',
  authDomain: 'carpeprod-b158f.firebaseapp.com',
  databaseURL: 'https://carpeprod-b158f.firebaseio.com',
  projectId: 'carpeprod-b158f',
  storageBucket: 'carpeprod-b158f.appspot.com',
  messagingSenderId: '361305835202',
  appId: '1:361305835202:web:68f6837ccfd6137a',
};

firebase.initializeApp(config);
firebase.database();
firebase.storage();

export default firebase;
