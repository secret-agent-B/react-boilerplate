import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { FaQuestion } from 'react-icons/fa';

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
