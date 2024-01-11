import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer'
import './HomePage.css'
import React from 'react';

const HomePage = () => {
  return (
    <div className='container'>
      <Header />
      <Main />
      <Footer />
    </div>
  )
};

export default HomePage;