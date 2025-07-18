import React, { useState } from 'react';
import TastemapRouter from './components/nav/TastemapRouter';

export default function App() {
  const [collected, setCollected] = useState([]);

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
    <TastemapRouter
      collected={collected}
      toggleCollected={toggleCollected}
    />
  );
}