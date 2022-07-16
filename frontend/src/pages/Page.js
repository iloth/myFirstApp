import React from 'react';
import ErrorMessage from '../controls/ErrorMessage';
import Loading from '../controls/Loading';

function Page(props) {
  return (
    <div className={`page ${props.className ?? ''}`}>
      {props.title && <h1>{props.title}</h1>}
      {(() => {
        switch(props.status) {
          case 'loading':
            return <Loading />
          case 'error':
            return <ErrorMessage error={props.error} />
          default:
          case 'loaded':
            return props.children;
            }
      })()}
    </div>
  );
}

export default Page;