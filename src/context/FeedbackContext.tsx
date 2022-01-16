import { v4 as uuidv4 } from 'uuid';

import React, { createContext, useState } from 'react';
import { Feedback } from '../components/models/Feedback';
import { FeedbackData } from '../data/FeedbackData';
import { AddFeedback } from '../components/commands/AddFeedback';

interface Props {
  children: JSX.Element[] | JSX.Element;
}

/**
 * Context interface to be set as the type for the createContext.
 */
interface FeedbackContextData {
  feedbacks: Feedback[];
  deleteFeedback: Function;
  addFeedback: Function;
}

const FeedbackContext = createContext<FeedbackContextData>({
  feedbacks: [],
  addFeedback: () => {
    console.log('Adding feedback...');
  },
  deleteFeedback: () => {
    console.log('Deleting feedback...');
  },
});

export const FeedbackProvider = ({ children }: Props) => {
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
    <FeedbackContext.Provider
      value={{ feedbacks, addFeedback, deleteFeedback }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
