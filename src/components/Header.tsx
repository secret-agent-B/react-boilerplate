import '../index.css';

import React, { Component } from 'react';

interface Props {
  text: string;
  bgColor: string;
  textColor: string;
}
interface State {}

export default class Header extends Component<Props, State> {
  static defaultProps: Props = {
    text: 'Feedback UI',
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: '#ff6a95',
  };

  state = {};

  render() {
    const { bgColor, text, textColor } = this.props;

    const headerStyles = {
      backgroundColor: bgColor,
      color: textColor,
    };

    return (
      <header style={headerStyles}>
        <div className="container">
          <h2>{text}</h2>
        </div>
      </header>
    );
  }
}
