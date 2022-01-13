import React, { Component } from 'react';
import FeedbackItem from './components/FeedbackItem';
import Header from './components/Header';

export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="container">
          <FeedbackItem />
        </div>
      </>
    );
  }
}
