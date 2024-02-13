// src/components/BotList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BotCard from './BotCard';

const BotList = () => {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/bots')
      .then((response) => {
        setBots(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      {bots.map((bot) => (
        <BotCard key={bot.id} bot={bot} />
      ))}
    </div>
  );
};

export default BotList;
