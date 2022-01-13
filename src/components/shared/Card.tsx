import React, { ReactElement } from 'react';

interface Prop {
  children: JSX.Element[] | JSX.Element;
  reverse?: boolean;
}

function Card({ children, reverse }: Prop): ReactElement {
  return <div className={`card ${reverse && 'reverse'}`}>{children}</div>;
}

export default Card;
