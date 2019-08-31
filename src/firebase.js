import * as firebase  from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA_M_TUZ_8p2UZQM9pIY8S3zs5gTzFxXOg",
    authDomain: "anime-app-d0047.firebaseapp.com",
    databaseURL: "https://anime-app-d0047.firebaseio.com",
    projectId: "anime-app-d0047",
    storageBucket: "",
    messagingSenderId: "634577961039",
    appId: "1:634577961039:web:a81b7614fae19abd"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();
const firebaseArticles = firebaseDB.ref('articles');
const firebaseTeams = firebaseDB.ref('teams');
const firebaseVideos = firebaseDB.ref('videos');

const firebaseloop = (snapshot) =>{
    const data = [];
    snapshot.forEach((child)=>{
        data.push({
            ...child.val(),
            id:child.key
        })
    })
    return data
}

export {
    firebase,
    firebaseDB,
    firebaseArticles,
    firebaseTeams,
    firebaseVideos,
    firebaseloop
}