import React, { ReactElement } from 'react';

interface Props {
  children: JSX.Element[] | JSX.Element;
  reverse?: boolean;
}

function Card({ children, reverse }: Props): ReactElement {
  return <div className={`card ${reverse && 'reverse'}`}>{children}</div>;
}

export default Card;
