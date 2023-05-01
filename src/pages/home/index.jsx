import List from '../../components/List';
import React from 'react';

import './home.scss';

const Home = ({ restaurants = [] }) => {
  const lastRestaurants = restaurants.slice(-4);
  const topRestaurants = restaurants
    .sort((a, b) => b.rank - a.rank)
    .slice(0, 4);
  return (
    <div id='home'>
      <h2>
        <i className='fa fa-home' />
        Welcome to BurgerZone
      </h2>
      <p>
        Our website is dedicated to providing you with a comprehensive list of
        restaurants in your area that offer delicious burgers and a wide range
        of other delectable dishes. Whether you're in the mood for a juicy
        burger, crispy fries, or a refreshing milkshake, BurgerZone has got you
        covered. We take pride in curating a diverse selection of restaurants to
        ensure that everyone can find something they love on our platform.
      </p>
      <p>
        At BurgerZone, we believe that food brings people together, and our
        website is designed to help you find the perfect restaurant for any
        occasion. Whether you're planning a romantic dinner for two, a family
        outing, or a quick lunch break, our intuitive interface makes it easy to
        find restaurants that match your preferences and budget. With our
        user-friendly platform, you can browse reviews, view menus, and make
        reservations all in one place. So why wait? Join the BurgerZone
        community today and start exploring the best restaurants in your area!
      </p>
      <div className='sections'>
        <List
          title={'Recommended Restaurants'}
          icon='fa fa-star'
          items={topRestaurants}
        />
        <List
          title={'New Restaurants'}
          icon='fa-solid fa-utensils'
          items={lastRestaurants}
        />
      </div>
    </div>
  );
};
export default Home;
