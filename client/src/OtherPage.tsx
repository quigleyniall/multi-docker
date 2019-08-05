import React from 'react';
import { Link } from 'react-router-dom';

const OtherPage: React.FC = () => {
  return (
    <div>
      Im some other page
      <Link to="/">Go back Home</Link>
    </div>
  );
};

export { OtherPage };
