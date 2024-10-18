import React from 'react';

import './about.scss';

const About = () => {
  return (
    <div id='about'>
      <h2>
        <i className='fa fa-info-circle' />
        About Us
      </h2>
      <div className='picture-grid'>
        <div>
          <p>
            Welcome to BurgerZone, your go-to website for finding the best
            burgers and other delicious dishes in your area. We're here to help
            you discover new and exciting restaurants that serve up some of the
            tastiest food you've ever had.
          </p>
          <p>
            Our mission is to connect you with the best restaurants in town,
            from fast-food chains to high-end eateries. We take pride in our
            comprehensive database of restaurants that offer a wide range of
            menu items to suit any taste and budget.
          </p>
          <p>
            At BurgerZone, we believe that food is more than just fuel for your
            body - it's a way to bring people together and create lasting
            memories. That's why we're committed to helping you find the perfect
            restaurant for any occasion, whether you're looking for a casual
            lunch spot or a romantic dinner destination.
          </p>
          <p>
            Our intuitive interface makes it easy to find and compare
            restaurants in your area. You can browse reviews from other diners,
            view menus, and make reservations all in one place. Plus, our
            platform is designed to be user-friendly and easy to navigate, so
            you can quickly find the information you need.
          </p>
          <p>
            We know that everyone has different tastes and preferences when it
            comes to food. That's why we curate a diverse selection of
            restaurants to ensure that there's something for everyone on our
            platform. Whether you're in the mood for a classic cheeseburger, a
            plant-based option, or a unique twist on a traditional dish, you'll
            find it on BurgerZone.
          </p>
          <p>
            Join the BurgerZone community today and start exploring the best
            restaurants in your area. We're confident that you'll find your new
            favorite spot for burgers and more!
          </p>
        </div>
        <div className='picture-container'>
          <img src={'/golden-burger.png'} alt='Golden Burger' />
        </div>
      </div>
    </div>
  );
};

export default About;
