import React, { ChangeEvent, ReactElement, useState } from 'react';
import Card from './shared/Card';

interface Props {}
interface FeedbackForm {
  text: string;
}

function FeedbackForm({}: Props): ReactElement {
  const [feedbackForm, setFeedbackForm] = useState<FeedbackForm | null>();

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    const feedbackForm: FeedbackForm = {
      text: e.target.value,
    };

    setFeedbackForm(feedbackForm);
  };

  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>
        {/* @todo - rating select component */}
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            value={feedbackForm?.text}
            placeholder="Write a review"
          />
          <button type="submit">Send</button>
        </div>
      </form>
    </Card>
  );
}

export default FeedbackForm;
