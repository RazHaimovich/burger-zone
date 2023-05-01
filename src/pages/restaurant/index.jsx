import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import React from 'react';

import Labels from '../../components/Labels';
import Rank from '../../components/Rank';
import List from '../../components/List';
import './restaurant.scss';

const getRandomItems = (items, num) => {
  const randoms = [];
  for (let i = 0; i < 4; i++) {
    if (!items.length) continue;
    const randomIndex = Math.floor(Math.random() * items.length);
    const item = items.splice(randomIndex, 1)[0];
    randoms.push(item);
  }
  return randoms;
};

const Restaurant = ({ restaurants = [] }) => {
  const navigate = useNavigate();

  const { pathname } = useLocation();
  let urlName = decodeURI(
    pathname.split('/').pop() ||
      pathname.split('/')[pathname.split('/').length - 2]
  );
  const restaurant = restaurants.find((res) => res.name === urlName);

  if (!restaurant)
    return (
      <div>
        <h2>
          <i className='fa-solid fa-triangle-exclamation' />
          Page Not Found!
        </h2>
      </div>
    );

  const goBack = () => {
    navigate(-1);
  };

  const {
    name,
    picture_url,
    description,
    rank,
    address,
    labels = [],
  } = restaurant;

  const similarRestaurants = restaurants.filter(
    (res) =>
      res.name !== name && res.labels.some((label) => labels.includes(label))
  );

  return (
    <>
      <div id='restaurant'>
        <button className='action-button back-button' onClick={goBack}>
          <i className='fa-solid fa-circle-arrow-left' />
        </button>
        <div className='details'>
          <div className='title'>
            <h2>{name}</h2>
            <div className='description'>
              {address}
              <div>|</div>
              <Rank rank={rank} />
            </div>
          </div>
          <p>{description}</p>
          <Labels labels={labels} />
        </div>
        <div>
          <img src={picture_url} alt={name} />
        </div>
      </div>{' '}
      {!!similarRestaurants.length && (
        <div className='similar-restaurants'>
          <List
            title={'You will also like...'}
            icon={'fa-solid fa-thumbs-up'}
            items={getRandomItems(similarRestaurants, 4)}
          />
        </div>
      )}
    </>
  );
};

export default Restaurant;
