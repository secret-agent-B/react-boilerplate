import React, { ChangeEvent, ReactElement, useState } from 'react';
import Button from './shared/Button';
import Card from './shared/Card';

interface FeedbackForm {
  text: string;
  message: string;
  btnDisabled: boolean;
}

function FeedbackForm(): ReactElement {
  const [feedbackForm, setFeedbackForm] = useState<FeedbackForm>({
    btnDisabled: true,
    message: '',
    text: '',
  });

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    const textLen = text.length;

    let disabled = false;
    let message = '';

    if (textLen < 10) {
      disabled = true;
      message = 'Text must be at least 10 characters long.';
    }

    const feedbackForm: FeedbackForm = {
      text: text,
      message: message,
      btnDisabled: disabled,
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
          <Button disabled={feedbackForm?.btnDisabled} type="submit">
            <>Send</>
          </Button>
        </div>
        {feedbackForm?.message && (
          <div className="message">{feedbackForm?.message}</div>
        )}
      </form>
    </Card>
  );
}

export default FeedbackForm;
