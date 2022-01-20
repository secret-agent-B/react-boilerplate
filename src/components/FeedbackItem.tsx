import React, { ReactElement } from 'react';

import Card from './shared/Card';
import { FaTimes } from 'react-icons/fa';
import { Feedback } from './models/Feedback';

interface Props {
  feedback: Feedback;
  handleDelete: Function;
}

function FeedbackItem({ feedback, handleDelete }: Props): ReactElement {
  return (
    <Card>
      <div className="num-display">{feedback.rating}</div>
      <button className="close">
        <FaTimes
          color="purple"
          onClick={() => handleDelete(feedback.id)}
        ></FaTimes>
      </button>
      <div className="text-display">{feedback.text}</div>
    </Card>
  );
}

export default FeedbackItem;
