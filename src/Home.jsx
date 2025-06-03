import React from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './components/Footer'


const Home = () => {
   const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('auth_token'); // adjust this based on your auth logic

    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [navigate]);
  return (
    <>
        <Header />
        <Banner />
        <Footer />
    </>
    
  )
}

export default Home