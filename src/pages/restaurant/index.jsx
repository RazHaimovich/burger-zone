/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import Labels from '../../components/Labels';
import Rank from '../../components/Rank';
import List from '../../components/List';
import './restaurant.scss';

const LOCAL_STORAGE_KEY = 'liked_restaurants';

const getRandomItems = (items) => {
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
  const [restaurant, setRestaurant] = useState();
  const [likedRestaurants, setLikedRestaurants] = useState([]);
  const [recommendedRestaurants, setRecommendedRestaurants] = useState([]);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    let urlName = decodeURI(
      pathname.split('/').pop() ||
        pathname.split('/')[pathname.split('/').length - 2]
    );
    const restaurant = restaurants.find((res) => res.name === urlName);
    setRestaurant(restaurant);
  }, []);

  useLayoutEffect(() => {
    setLikedRestaurants(
      JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []
    );
  }, []);

  useEffect(() => {
    if (restaurant)
      setRecommendedRestaurants(getRandomItems(similarRestaurants, 4));
  }, [restaurant]);

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

  const likeRestaurantHandler = () => {
    const isLiked = likedRestaurants.includes(restaurant.name);
    if (!isLiked) {
      localStorage.setItem(
        LOCAL_STORAGE_KEY,
        JSON.stringify([...likedRestaurants, restaurant.name])
      );
      setLikedRestaurants((prev) => [...prev, restaurant.name]);
    } else {
      localStorage.setItem(
        LOCAL_STORAGE_KEY,
        JSON.stringify(
          likedRestaurants.filter((name) => name !== restaurant.name)
        )
      );
      setLikedRestaurants((prev) =>
        prev.filter((name) => name !== restaurant.name)
      );
    }
  };

  const renderLinkButton = () => {
    const isLiked = likedRestaurants.includes(restaurant.name);
    return (
      <div
        onClick={likeRestaurantHandler}
        className={isLiked ? 'like-button liked' : 'like-button'}
      >
        <i className={isLiked ? 'fa-solid fa-heart' : 'fa-regular fa-heart'} />
      </div>
    );
  };

  return (
    <>
      <div id='restaurant'>
        <button className='action-button back-button' onClick={goBack}>
          <i className='fa-solid fa-circle-arrow-left' />
        </button>
        <div className='details'>
          <div className='top-bar'>
            <div className='title'>
              <h2>{name}</h2>
              <div className='description'>
                {address}
                <div>|</div>
                <Rank rank={rank} />
              </div>
            </div>
            {renderLinkButton()}
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
            items={recommendedRestaurants}
          />
        </div>
      )}
    </>
  );
};

export default Restaurant;
