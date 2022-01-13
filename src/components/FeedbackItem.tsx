import React, { ReactElement, useState } from 'react';
import { Feedback } from './interfaces/FeedbackItem';

interface Props {}

function FeedbackItem({}: Props): ReactElement {
  // states
  const [feedback] = useState<Feedback | null>({
    rating: 5,
    text: 'This is a sample feedback.',
  });

  // event handlers
  const handleClick = () => {};

  return (
    <div className="card">
      <div className="num-display">{feedback?.rating}</div>
      <div className="text-display">{feedback?.text}</div>
      <button onClick={handleClick}></button>
    </div>
  );
}

export default FeedbackItem;
