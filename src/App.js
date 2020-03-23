import React, { useState } from 'react';

function App() {
  const [message, setMessage] = useState('Funny joke');
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
      <p>{message}</p>
      {liked ? likesResult : voteButton }
    </div>
  );
}
export default App;
