import React, { useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const jokes = db.collection('jokes');

let setJoke1 = jokes.doc('0').set({
  text: 'I ate a clock yesterday, it was very time-consuming.'
});
let setJoke2 = jokes.doc('1').set({
  text: 'Have you played the updated kids’ game? I Spy With My Little Eye... Phone.'
});
let setJoke3 = jokes.doc('2').set({
  text: 'A perfectionist walked into a bar... apparently, the bar wasn’t set high enough.'
});

function App() {
  const [joke, setJoke] = useState('I do not know any jokes...');
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  function handleClick() {
    setLikes(likes + 1);
    setLiked(true);
  }

  const voteButton = (
    <button onClick={handleClick}>
      I like this
    </button>
  );

  const likesResult = (
    <div>
      <p>
        {likes} likes
      </p>
      <button onClick={() => setLiked(false)}>
        Like again
      </button>
    </div>
  );

  return (
    <div>
      <p>{joke}</p>
      {liked ? likesResult : voteButton }
    </div>
  );
}
export default App;
