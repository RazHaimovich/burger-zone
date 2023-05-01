import { useNavigate } from 'react-router-dom';
import Labels from '../Labels';
import Rank from '../Rank';
import React from 'react';

const SingleItem = ({ item }) => {
  const { name, picture_url, rank, address, labels = [] } = item;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/restaurant/${encodeURIComponent(name)}`);
  };

  return (
    <div className='item' onClick={handleClick}>
      <img src={picture_url} alt={name} />
      <div className='details'>
        <h4>{name}</h4>
        <Rank rank={rank} />
      </div>
      <div className='description'>{address}</div>
      <Labels labels={labels} />
    </div>
  );
};

export default SingleItem;
