// src/components/LottieLoader.js
import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../data/lottie-logo.json';


const Loader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMinYMax slice',
    },
  };

  return (
    <div style={styles.loaderContainer}>
      <Lottie options={defaultOptions} height={'100vh'} width={'100vw'} />
    </div>
  );
};

const styles = {
  loaderContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#ffffff', // Set the background color as per your design
  },
};

export default Loader;
