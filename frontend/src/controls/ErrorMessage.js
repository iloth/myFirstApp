import React from 'react';

function ErrorMessage(props) {
  if (!props.error) {
    return null;
  }

  let text = `${props.error.code ? `${props.error.code} - ` : ''} props.error.message`;

  return (
    <div className="alert alert-danger error mt-3 mb-3" role="alert">{ text }</div>
  );

}

export default ErrorMessage;