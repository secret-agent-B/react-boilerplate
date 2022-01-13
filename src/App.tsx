import React, { ReactElement, useState } from 'react';

// components
import Header from './components/Header';

// interfaces
import { Feedback } from './components/models/Feedback';
import FeedbackList from './components/FeedbackList';

// data
import { FeedbackData } from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';

function App(): ReactElement {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>(FeedbackData);

  const deleteFeedback = (id: number) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedbacks(feedbacks.filter((feedback) => feedback.id !== id));
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm />
        <FeedbackStats feedbacks={feedbacks} />
        <FeedbackList feedbacks={feedbacks} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
