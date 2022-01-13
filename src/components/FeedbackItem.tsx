import React, { ReactElement, useState } from 'react';
import { Feedback } from './interfaces/FeedbackItem';

interface Props {}

function FeedbackItem({}: Props): ReactElement {
  // states
  const [feedback, setFeedback] = useState<Feedback>({
    rating: 5,
    text: 'This is a sample feedback.',
  });

  // event handlers
  const handleClick = () => {
    setFeedback((feedback) => {
      const f: Feedback = {
        text: feedback.text,
        rating: feedback.rating + 1,
      };

      return f;
    });
  };

  return (
    <div className="card">
      <div className="num-display">{feedback?.rating}</div>
      <div className="text-display">{feedback?.text}</div>
      <br />
      <button className="btn btn-primary" onClick={handleClick}>
        Click
      </button>
    </div>
  );
}

export default FeedbackItem;
