import React from 'react';

const SingleSearchResult = ({ result, redirect }) => {
  const { name, picture_url, address } = result;

  const handleClick = () => {
    redirect(`/restaurant/${encodeURIComponent(name)}`);
  };

  return (
    <div className='result' onClick={handleClick}>
      <img src={picture_url} alt={name} />
      <div>
        <h4>{name}</h4>
        {address}
      </div>
      <i className='fa-solid fa-chevron-right' />
    </div>
  );
};

export default SingleSearchResult;
