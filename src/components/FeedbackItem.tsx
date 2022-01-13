import React, { ReactElement } from 'react';
import { Feedback } from './models/Feedback';
import Card from './shared/Card';

interface Props {
  feedback: Feedback;
}

function FeedbackItem({ feedback }: Props): ReactElement {
  return (
    <Card>
      <div className="num-display">{feedback?.rating}</div>
      <div className="text-display">{feedback?.text}</div>
    </Card>
  );
}

export default FeedbackItem;
