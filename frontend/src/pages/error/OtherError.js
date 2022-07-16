import React from "react";
import { useParams } from 'react-router-dom';

function OtherError() {
const { status } = useParams();

  return (
    <h1 className="text-danger">{`${status} - Http error`}</h1>
  );
}

export default OtherError;