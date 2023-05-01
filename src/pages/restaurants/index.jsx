/* eslint-disable react-hooks/exhaustive-deps */
import List from '../../components/List';
import { useEffect } from 'react';
import { useState } from 'react';
import React from 'react';

const Restaurants = ({ restaurants = [] }) => {
  const [selectValue, setSelectValue] = useState('');
  const [restaurantsOrder, setRestaurantsOrder] = useState(restaurants);

  const handleChangeOrder = (e) => {
    setSelectValue(e.target.value);
  };

  useEffect(() => {
    switch (selectValue) {
      case 'rank':
        setRestaurantsOrder(() =>
          [...restaurants].sort((a, b) => b.rank - a.rank)
        );
        break;
      case 'time':
        setRestaurantsOrder([...restaurants].reverse());
        break;
      default:
        setRestaurantsOrder(
          [...restaurants].sort((a, b) => {
            if (a.name < b.name) {
              return -1;
            } else if (a.name > b.name) {
              return 1;
            } else {
              return 0;
            }
          })
        );
        break;
    }
  }, [selectValue]);

  const FilterComponent = () => {
    return (
      <div>
        Order By:{' '}
        <select value={selectValue} onChange={handleChangeOrder}>
          <option value={'default'}>Name</option>
          <option value={'rank'}>Rank</option>
          <option value={'time'}>Added Time</option>
        </select>
      </div>
    );
  };

  return (
    <div>
      <h2>
        <i className='fa-solid fa-location-dot' />
        Restaurants
      </h2>
      <p>
        Welcome to our Restaurants section! Below you will find a comprehensive
        list of all the restaurants featured on our website. To make your search
        easier, you can sort the restaurants by rank or by the date they were
        added to the website. Simply click on the relevant heading at the top of
        the list to sort by your preferred criteria.
      </p>
      <p>
        We take pride in providing you with a wide range of options, from casual
        eateries to fine dining experiences, so we're confident that you'll find
        something that suits your taste buds. Take your time to browse through
        the list and find the perfect restaurant for your next meal out.
      </p>
      <p>Bon appétit!</p>
      <List
        title={'Restaurants List'}
        icon='fa-solid fa-list'
        items={restaurantsOrder}
        FilterComponent={FilterComponent}
      />
    </div>
  );
};

export default Restaurants;
