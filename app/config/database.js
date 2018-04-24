import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAn6PyJxGItl0aPRwlP_4hn1vuYfx9vQ7Y",
    databaseURL: "https://leeway-1521710535384.firebaseio.com/"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default fireDB = firebaseApp.database()

