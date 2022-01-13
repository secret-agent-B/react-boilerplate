import React, { ReactElement, useState } from 'react';

// components
import Header from './components/Header';

// interfaces
import { Feedback } from './components/models/Feedback';
import FeedbackList from './components/FeedbackList';

// data
import { FeedbackData } from './data/FeedbackData';

function App(): ReactElement {
  const [feedbacks] = useState<Feedback[]>(FeedbackData);
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList feedbacks={feedbacks} />
      </div>
    </>
  );
}

export default App;
