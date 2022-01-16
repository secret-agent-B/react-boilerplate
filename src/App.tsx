import React, { ReactElement } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// components & pages
import Header from './components/Header';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import AboutIconLink from './components/AboutIconLink';
import AboutPage from './pages/AboutPage';

// data
import { FeedbackProvider } from './context/FeedbackContext';

function App(): ReactElement {
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
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
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
