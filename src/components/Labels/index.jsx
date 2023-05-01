import React from 'react';

import './labels.scss';

const Labels = ({ labels }) => {
  return (
    <div className='labels'>
      {labels.map((label) => (
        <div key={label} className='label'>
          {label}
        </div>
      ))}
    </div>
  );
};

export default Labels;
