import React, { ReactElement, useContext } from 'react';

import FeedbackContext from '../context/FeedbackContext';
import FeedbackItem from './FeedbackItem';

function FeedbackList(): ReactElement {
  const { feedbacks, deleteFeedback } = useContext(FeedbackContext);

  if (!feedbacks || feedbacks.length === 0) {
    return <div>No feedback yet.</div>;
  }

  return (
    <div className="feedback-list">
      {feedbacks.map((feedback) => (
        <FeedbackItem
          key={feedback.id}
          feedback={feedback}
          handleDelete={(id: number) => deleteFeedback(id)}
        />
      ))}
    </div>
  );
}

export default FeedbackList;
