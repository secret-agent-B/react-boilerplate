import React, { ChangeEvent, FormEvent, ReactElement, useState } from 'react';
import RatingSelect from './RatingSelect';
import Button from './shared/Button';
import Card from './shared/Card';
import { AddFeedback } from './commands/AddFeedback';

interface Props {
  handleAdd: Function;
}

function FeedbackForm({ handleAdd }: Props): ReactElement {
  const defaultRating = 10;
  const [rating, setRating] = useState<number>(defaultRating);
  const [text, setText] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [btnDisabled, setBtnDisabled] = useState<boolean>(true);

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    const textLen = text.length;

    let disabled = false;
    let message = '';

    if (textLen < 10) {
      disabled = true;
      message = 'Text must be at least 10 characters long.';
    }

    setText(text);
    setMessage(message);
    setBtnDisabled(disabled);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    // prevent from submitting form (default behavior)
    e.preventDefault();

    if (text.trim().length > 10) {
      const newFeedback: AddFeedback = {
        text,
        rating,
      };
      console.log({
        text,
        rating,
      });
      handleAdd(newFeedback);
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect
          defaultRating={defaultRating}
          onSelected={(rating: number) => {
            setRating(rating);
          }}
        />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            value={text}
            placeholder="Write a review"
          />
          <Button disabled={btnDisabled} type="submit">
            <>Send</>
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
