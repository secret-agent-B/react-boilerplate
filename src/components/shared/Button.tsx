import React, { ReactElement } from 'react';

interface Props {
  children: JSX.Element[] | JSX.Element;
  version?: 'btn-primary' | 'btn-secondary';
  type?: 'submit' | 'reset' | 'button';
  disabled?: boolean;
}

function Button({
  children,
  version = 'btn-primary',
  type = 'button',
  disabled = false,
}: Props): ReactElement {
  return (
    <button type={type} disabled={disabled} className={`btn ${version}`}>
      {children}
    </button>
  );
}

export default Button;
