import React, { ReactElement } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// components
import Header from './components/Header';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import AboutIconLink from './components/AboutIconLink';

import AboutPage from './pages/AboutPage';

// commands/models
import { AddFeedback } from './components/commands/AddFeedback';

// data
import { FeedbackProvider } from './context/FeedbackContext';

function App(): ReactElement {
  const deleteFeedback = (id: string) => {
    // if (window.confirm('Are you sure you want to delete?')) {
    //   setFeedbacks(feedbacks.filter((feedback) => feedback.id !== id));
    // }
  };

  const addFeedback = (addFeedback: AddFeedback) => {
    // const newFeedback: Feedback = {
    //   id: uuidv4(),
    //   text: addFeedback.text,
    //   rating: addFeedback.rating,
    // };
    // setFeedbacks([newFeedback, ...feedbacks]);
  };

  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FeedbackForm handleAdd={addFeedback} />
                  <FeedbackStats feedbacks={[]} />
                  <FeedbackList handleDelete={deleteFeedback} />
                </>
              }
            ></Route>
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
