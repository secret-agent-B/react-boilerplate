import React, { createContext, useState } from 'react';
import { Feedback } from '../components/models/Feedback';
import { FeedbackData } from '../data/FeedbackData';

interface Props {
  children: JSX.Element[] | JSX.Element;
}

/**
 * Context interface to be set as the type for the createContext.
 */
interface FeedbackContextData {
  feedbacks: Feedback[];
}

const FeedbackContext = createContext<FeedbackContextData>({
  feedbacks: [],
});

export const FeedbackProvider = ({ children }: Props) => {
  const [feedbacks] = useState<Feedback[]>(FeedbackData);

  return (
    <FeedbackContext.Provider value={{ feedbacks }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
