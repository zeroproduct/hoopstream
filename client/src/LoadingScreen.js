import React from 'react';

const LoadingScreen = () => {
  return (
    <div
      style={{ height: '100vh', width: '100vw', backgroundColor: '#ffa39e' }}
    >
      <div style={{ color: 'white', textAlign: 'center', paddingTop: '50vh' }}>
        Loading
      </div>
    </div>
  );
};

export default LoadingScreen;
