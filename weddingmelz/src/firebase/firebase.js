{/* <script src="https://www.gstatic.com/firebasejs/5.4.1/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD4GvlhQJi1502PWWYGizN5cR2r7Ae6uMk",
    authDomain: "weddingmelz-7e10b.firebaseapp.com",
    databaseURL: "https://weddingmelz-7e10b.firebaseio.com",
    projectId: "weddingmelz-7e10b",
    storageBucket: "weddingmelz-7e10b.appspot.com",
    messagingSenderId: "461889095696"
  };
  firebase.initializeApp(config);
</script> */}

import firebase from 'firebase/app';

const config = {
  apiKey: "AIzaSyD4GvlhQJi1502PWWYGizN5cR2r7Ae6uMk",
  authDomain: "weddingmelz-7e10b.firebaseapp.com",
  databaseURL: "https://weddingmelz-7e10b.firebaseio.com",
  projectId: "weddingmelz-7e10b",
  storageBucket: "weddingmelz-7e10b.appspot.com",
  messagingSenderId: "461889095696"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
