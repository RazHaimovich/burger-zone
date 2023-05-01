/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link, useLocation, useNavigate } from 'react-router-dom';

import React from 'react';

import SearchModal from './modals/searchModal';
import SearchInput from './modals/searchInput';
import { useEffect } from 'react';
import { useState } from 'react';
import './header.scss';

const buttons = [
  { label: 'Home', page: '/', icon: 'fa-solid fa-house' },
  { label: 'About', page: '/about', icon: 'fa-solid fa-info-circle' },
  {
    label: 'Restaurants',
    page: '/restaurants',
    icon: 'fa-solid fa-location-dot',
  },
  { label: 'Contact Us', page: '/contact', icon: 'fa-solid fa-envelope' },
];
const Header = ({ restaurants }) => {
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchIsOpen, setSearchIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const toggleSearch = () => setSearchIsOpen((prev) => !prev);

  useEffect(() => {
    setIsMenuOpen(false);
    setSearchIsOpen(false);
  }, [pathname]);

  const redirect = (url) => {
    setIsMenuOpen(false);
    setSearchIsOpen(false);
    navigate(url);
  };

  return (
    <>
      <header id='header'>
        <div className='logo'>
          <Link to='/'>
            <div className='brand'>
              <div className='icon'>
                <i className='fa-solid fa-burger'></i>
              </div>
              <h1>BurgerZone</h1>
            </div>
          </Link>
          <div className='menu-button' onClick={toggleMenu}>
            <i className='fa-solid fa-bars' />
          </div>
        </div>
        <div className={isMenuOpen ? 'toggle-menu opened' : 'toggle-menu'}>
          <ul className='links'>
            {buttons.map(({ label, page, icon }, key) => (
              <li key={key} className={page === pathname ? 'active' : ''}>
                <Link to={page}>
                  <i className={icon} />
                  {label}
                </Link>
              </li>
            ))}
            <li className='mobile-only'>
              <a href='#' onClick={toggleSearch}>
                <i className={'fa-solid fa-search'} />
                Search
              </a>
            </li>
          </ul>
          <SearchInput list={restaurants} redirect={redirect} />
        </div>
      </header>
      {searchIsOpen && (
        <SearchModal
          close={toggleSearch}
          list={restaurants}
          redirect={redirect}
        />
      )}
    </>
  );
};

export default Header;
