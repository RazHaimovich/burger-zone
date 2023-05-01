import React from 'react';

import SingleItem from './singleItem';
import './list.scss';

const List = ({ title, icon, items, FilterComponent }) => {
  return (
    <div className='list'>
      <div className='top'>
        <h3>
          <i className={icon} />
          {title}
        </h3>
        {FilterComponent && <FilterComponent />}
      </div>
      <div className='items'>
        {items.map((item) => (
          <SingleItem key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
};

export default List;
