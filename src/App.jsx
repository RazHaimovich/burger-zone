import ScrollToTop from './components/scrollToTop';
import { Routes, Route } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import './App.scss';

const Restaurants = lazy(() => import('./pages/restaurants'));
const Restaurant = lazy(() => import('./pages/restaurant'));
const Contact = lazy(() => import('./pages/contact'));
const About = lazy(() => import('./pages/about'));
const Home = lazy(() => import('./pages/home'));

function App({ restaurants }) {
  return (
    <div className='App'>
      <Header restaurants={restaurants} />
      <div className='container'>
        <ScrollToTop />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/' element={<Home restaurants={restaurants} />} />
            <Route path='/about' element={<About />} />
            <Route
              path='/restaurants'
              element={<Restaurants restaurants={restaurants} />}
            />
            <Route
              path='/restaurant/:name'
              element={<Restaurant restaurants={restaurants} />}
            />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}

export default App;
