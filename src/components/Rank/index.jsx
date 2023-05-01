import React from 'react';

import './rank.scss';

const Rank = ({ rank }) => {
  const addHalfStar = Math.floor(rank) !== rank;
  const rankArray = Array.from({ length: Math.floor(rank) });

  return (
    <div className='rank'>
      {rankArray.map((_, key) => (
        <i key={key} className='fa fa-star' />
      ))}
      {addHalfStar && <i className='fa fa-star-half' />}
    </div>
  );
};

export default Rank;
