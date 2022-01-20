import React, { ReactElement } from 'react';

import { FaQuestion } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface Props {}

function AboutIconLink({}: Props): ReactElement {
  return (
    <div className="about-link">
      <Link
        to={{
          pathname: '/about',
          // search: '?qs1=xyz&qs2=abc',
          // hash: '#hello',
        }}
      >
        <FaQuestion size={30} />
      </Link>
    </div>
  );
}

export default AboutIconLink;
