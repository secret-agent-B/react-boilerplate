import React, { ReactElement, useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import FeedbackItem from './FeedbackItem';

interface Props {
  handleDelete: Function;
}

function FeedbackList({ handleDelete }: Props): ReactElement {
  const { feedbacks } = useContext(FeedbackContext);

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
