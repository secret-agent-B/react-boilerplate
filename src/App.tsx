import { v4 as uuidv4 } from 'uuid';
import React, { ReactElement, useState } from 'react';

// components
import Header from './components/Header';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';

// commands/models
import { Feedback } from './components/models/Feedback';
import { AddFeedback } from './components/commands/AddFeedback';

// data
import { FeedbackData } from './data/FeedbackData';

function App(): ReactElement {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>(FeedbackData);

  const deleteFeedback = (id: string) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedbacks(feedbacks.filter((feedback) => feedback.id !== id));
    }
  };

  const addFeedback = (addFeedback: AddFeedback) => {
    const newFeedback: Feedback = {
      id: uuidv4(),
      text: addFeedback.text,
      rating: addFeedback.rating,
    };
    setFeedbacks([newFeedback, ...feedbacks]);
  };

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedbacks={feedbacks} />
        <FeedbackList feedbacks={feedbacks} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
