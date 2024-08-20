"use client"

// src/App.js
import React, { useState, useEffect } from 'react';
import Loader from "./components/Loader";
import Hero from './components/Hero';

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // Simulate loading time, adjust as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Hero />
        </div>
      )}
    </>
  );
}

export default Home;

