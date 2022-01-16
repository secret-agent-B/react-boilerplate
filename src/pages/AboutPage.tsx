import React, { ReactElement } from 'react';
import Card from '../components/shared/Card';

interface Props {}

function AboutPage({}: Props): ReactElement {
  return (
    <Card>
      <div className="about">
        <h1>About This Project</h1>
        <p>This is a React app to leave feedback for a product or service.</p>
        <p>Version: 1.0.0</p>
        <p>
          <a href="/">Back To Home</a>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
