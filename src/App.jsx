import ScrollToTop from './components/scrollToTop';
import { Routes, Route } from 'react-router-dom';
import Restaurants from './pages/restaurants';
import Restaurant from './pages/restaurant';
import Header from './components/header';
import Footer from './components/footer';
import Contact from './pages/contact';
import About from './pages/about';
import Home from './pages/home';
import './App.scss';

function App({ restaurants }) {
  return (
    <div className='App'>
      <Header restaurants={restaurants} />
      <div className='container'>
        <ScrollToTop />
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
      </div>
      <Footer />
    </div>
  );
}

export default App;
