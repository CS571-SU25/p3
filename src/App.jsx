import React, { useState } from 'react';
import TastemapRouter from './components/nav/TastemapRouter';
import LoginStatusContext from './components/contexts/LoginStatus';

export default function App() {
  const [collected, setCollected] = useState([]);

  const [loginStatus, setLoginStatus] = useState(() => {
    const stored = sessionStorage.getItem("loginStatus");
    return stored ? JSON.parse(stored) : { username: null };
  });

  const toggleCollected = (restaurant) => {
    setCollected(prev => {
      if (prev.some(r => r.id === restaurant.id)) {
        return prev.filter(r => r.id !== restaurant.id);
      } else {
        return [...prev, restaurant];
      }
    });
  };


  return (
    <LoginStatusContext.Provider value={[loginStatus, setLoginStatus]}>
      <TastemapRouter
        collected={collected}
        toggleCollected={toggleCollected}
      />
    </LoginStatusContext.Provider>
  );
}