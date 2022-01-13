import React, { ReactElement } from 'react';
import { Feedback } from './models/Feedback';

interface Props {
  feedbacks: Feedback[];
}

function FeedbackStats({ feedbacks }: Props): ReactElement {
  // Calculate ratings average
  const average =
    feedbacks.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedbacks.length;

  return (
    <div className="feedback-stats">
      <h4>{feedbacks.length} Reviews</h4>
      <h4>
        Average Rating:{' '}
        {isNaN(average) ? 0 : average.toFixed(1).replace(/[.,]0$/, '')}
      </h4>
    </div>
  );
}

export default FeedbackStats;
