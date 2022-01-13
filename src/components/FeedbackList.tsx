import React, { ReactElement } from 'react';
import FeedbackItem from './FeedbackItem';
import { Feedback } from './models/Feedback';

interface Props {
  feedbacks: Feedback[];
  handleDelete: Function;
}

function FeedbackList({ feedbacks, handleDelete }: Props): ReactElement {
  if (!feedbacks || feedbacks.length === 0) {
    return <div>No feedback yet.</div>;
  }

  return (
    <div className="feedback-list">
      {feedbacks.map((feedback) => (
        <FeedbackItem
          key={feedback.id}
          feedback={feedback}
          handleDelete={(id: number) => handleDelete(id)}
        />
      ))}
    </div>
  );
}

export default FeedbackList;
